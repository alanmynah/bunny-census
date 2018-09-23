import * as mongoose from "mongoose";
import { CensusEntry } from "../models/census";
import { Request, Response } from "express";

const censusEntry = mongoose.model("CensusEntry", CensusEntry);
export class CensusController {
  public getCensus(req: Request, res: Response) {
    censusEntry.find({}, (err, census) => {
      if (err) {
        res.send(err);
      }
      res.json(census);
    });
  }

  public getCensusEntry(req: Request, res: Response) {
    censusEntry.findById(req.params.entryId, (err, entry) => {
      if (err) {
        res.send(err);
      }
      res.json(entry);
    });
  }

  public addNewCensusEntry(req: Request, res: Response) {
    let newCensusEntry = new censusEntry(req.body);

    newCensusEntry.save((err, entry) => {
      if (err) {
        res.send(err);
      }
      res.json(entry);
    });
  }

  public updateEntry(req: Request, res: Response) {
    censusEntry.findOneAndUpdate(
      { _id: req.params.entryId },
      req.body,
      { new: true },
      (err, entry) => {
        if (err) {
          res.send(err);
        }
        res.json(entry);
      }
    );
  }

  public deleteEntry(req: Request, res: Response) {
    censusEntry.remove({ _id: req.params.entryId }, (err, entryId) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: `Deleted entry! ${entryId}` });
    });
  }
}
