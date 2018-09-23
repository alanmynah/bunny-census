import { Request, Response } from "express";
import { CensusController } from "./controllers/censusController";

export class Routes {
  public censusController: CensusController = new CensusController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET  root"
      });
    });

    app
      .route("/census")
      .get(this.censusController.getCensus)
      .post(this.censusController.addNewCensusEntry);

    app
      .route("/census/:entryId")
      .get(this.censusController.getCensusEntry)
      .put(this.censusController.updateEntry)
      .delete(this.censusController.deleteEntry);
  }
}
