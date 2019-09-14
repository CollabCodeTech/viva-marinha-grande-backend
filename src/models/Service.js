import { Schema, model } from "mongoose";

const ServiceSchema = Schema(
  {
    photo: {
      type: String
    },
    title: {
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
    }
  },
  { timestamps: true }
);

export default model("Service", ServiceSchema);
