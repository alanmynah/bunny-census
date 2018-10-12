import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CensusSchema: mongoose.Schema = new Schema({
  name: {
    type: String,
    required: "Enter bunny's name"
  },
  residence: {
    type: String,
    required: "Enter where bunny lives"
  },
  type: {
    type: String,
    required: "Enter the type of your bunny"
  },
  reality_status: {
    type: String,
    required: "Enter if your bunny is real or imaginary"
  },
  colour: {
    type: String,
    required: "Enter bunny's colour"
  },
  size: {
    type: String,
    required: "Enter bunny's size"
  },
  age: {
    type: String,
    required: "Enter how old your bunny is"
  },
  relationship: {
    type: String,
    required: "Enter the relationship with your bunny"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
