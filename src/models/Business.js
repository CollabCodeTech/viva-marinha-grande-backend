import { Schema, model } from "mongoose";

const ServiceSchema = Schema(
  {
    photo: {
      type: String
    },
    title: {
      type: String
    },
    site: {
      type: String
    },
    description: {
      type: String
    },
    category: {
      type: String
    },
    address: {
      type: String
    },
    concelho: {
      type: String
    },
    district: {
      type: String
    },
    stars: {
      type: Number,
      min: 1,
      max: 5
    },
    value: {
      type: Number,
      min: 1,
      max: 5
    },
    week: [
      {
        name: String,
        hours: {
          close: String,
          open: String,
          pause_finish: String,
          pause_start: String
        }
      }
    ]
  },
  { timestamps: true }
);

export default model("Service", ServiceSchema);
