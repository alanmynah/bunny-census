import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as helmet from "helmet";
import * as cors from "cors";
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
    const corsOptions: cors.CorsOptions = {
      origin: "*",
      optionsSuccessStatus: 200
    };
    this.app.use(cors(corsOptions));
  }

  private dbConfig(): void {
    const mongodb = process.env.MONGO;
    mongoose.connect(
      mongodb,
      { useNewUrlParser: true }
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }
}

export default new App().app;
