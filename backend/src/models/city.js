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
      trim: true,
      set: (name) => {
        // example: "New York" -> "NY1", "New York City" -> "NYC2"
        const code = name
          .toUpperCase()
          .replace(/ /g, "")
          .replace(/[^\w\s]/gi, "");
        return `${code}${City.countDocuments({ name }) + 1}`;
      },
    },
  },
  {
    timestamps: true,
  }
);

const City = mongoose.model("City", citySchema);

export default City;
