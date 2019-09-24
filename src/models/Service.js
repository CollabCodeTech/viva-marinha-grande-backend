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
    monday_open: {
      type: String
    },
    monday_close: {
      type: String
    },
    monday_pause_start: {
      type: String
    },
    monday_pause_finish: {
      type: String
    },
    tuesday_open: {
      type: String
    },
    tuesday_close: {
      type: String
    },
    tuesday_pause_start: {
      type: String
    },
    tuesday_pause_finish: {
      type: String
    },
    wednesday_open: {
      type: String
    },
    wednesday_close: {
      type: String
    },
    wednesday_pause_start: {
      type: String
    },
    wednesday_pause_finish: {
      type: String
    },
    thursday_open: {
      type: String
    },
    thursday_close: {
      type: String
    },
    thursday_pause_start: {
      type: String
    },
    thursday_pause_finish: {
      type: String
    },
    friday_open: {
      type: String
    },
    friday_close: {
      type: String
    },
    friday_pause_start: {
      type: String
    },
    friday_pause_finish: {
      type: String
    },
    saturday_open: {
      type: String
    },
    saturday_close: {
      type: String
    },
    saturday_pause_start: {
      type: String
    },
    saturday_pause_finish: {
      type: String
    },
    sunday_open: {
      type: String
    },
    sunday_close: {
      type: String
    },
    sunday_pause_start: {
      type: String
    },
    sunday_pause_finish: {
      type: String
    },
    holiday_open: {
      type: String
    },
    holiday_close: {
      type: String
    },
    holiday_pause_start: {
      type: String
    },
    holiday_pause_finish: {
      type: String
    }
  },
  { timestamps: true }
);

export default model("Service", ServiceSchema);
