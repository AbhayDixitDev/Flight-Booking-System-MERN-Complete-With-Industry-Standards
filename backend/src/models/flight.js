import mongoose, { Schema } from "mongoose";

const flightSchema = new Schema(
  {
    airline: {
      type: Schema.Types.ObjectId,
      ref: "Airline",
      required: true,
    },
    flightNumber: {
      type: String,
      required: true,
      unique: true,
    },
    departureCity: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    arrivalCity: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    departureTime: {
      type: String,
      required: true,
    },
    arrivalTime: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    economyPrice: {
      type: Number,
      required: true,
    },
    businessPrice: {
      type: Number,
      required: true,
    },
    economySeats: {
      type: Number,
      required: true,
    },
    businessSeats: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model("Flight", flightSchema);

export { Flight };
