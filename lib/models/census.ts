import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CensusEntry = new Schema({
  bunnyName: {
    type: String,
    required: "Enter bunny name"
  },
  colour: {
    type: String,
    required: "Enter a bunny colour"
  },
  size: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
