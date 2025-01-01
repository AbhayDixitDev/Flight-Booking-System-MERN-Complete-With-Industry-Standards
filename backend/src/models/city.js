import mongoose, { Schema } from "mongoose";

const citySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

  },
  {
    timestamps: true,
  }
);

const City = mongoose.model("City", citySchema);

export default City;
