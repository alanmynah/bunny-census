import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as helmet from "helmet";
import { Routes } from "./routes";

class App {
  public app: express.Application;
  public router: Routes = new Routes();

  constructor() {
    dotenv.config();
    this.app = express();
    this.dbConfig();
    this.config();
    this.router.routes(this.app);
  }

  private config(): void {
    this.app.use(helmet());
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.all("/", (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });
  }

  private dbConfig(): void {
    const mongodb = process.env.MONGO;
    mongoose.connect(mongodb);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }
}

export default new App().app;
