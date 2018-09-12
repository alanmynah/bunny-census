import { Request, Response } from "express";

export class Routes {
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET  root"
      });
    });

    app
      .route("/census")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "GET census"
        });
      })
      .post((req: Request, res: Response) => {
        res.status(200).send({
          message: "POST census entry"
        });
      });

    app
      .route("/census/:entryId")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "GET census entry"
        });
      })
      .put((req: Request, res: Response) => {
        res.status(200).send({
          message: "PUT  census entry"
        });
      })
      .delete((req: Request, res: Response) => {
        res.status(200).send({
          message: "census entry"
        });
      });
  }
}
