import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CensusSchema: mongoose.Schema = new Schema({
  name: {
    type: String,
    required: "Enter bunny name"
  },
  colour: {
    type: String,
    required: "Enter bunny colour"
  },
  size: {
    type: String,
    required: "Enter bunny size"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
