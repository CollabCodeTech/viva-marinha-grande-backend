import { Schema, model } from "mongoose";

const CategorySchema = Schema(
  {
    content: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  { timestamp: true }
);

export default model("Category", CategorySchema);
