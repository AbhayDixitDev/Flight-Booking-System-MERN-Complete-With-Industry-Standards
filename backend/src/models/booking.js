
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const passengerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
      required: true,
    },
    passportNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const bookingSchema = new Schema(
  {
    flightDetails: {
      type: Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bookingDate: {
      type: Date,
      required: [true, "Booking date is required"],
      validate: {
        validator: (value) => value >= new Date().setDate(new Date().getDate() + 1),
        message: "Booking date must be from tomorrow onwards",
      },
    },
    passengers: {
      type: [passengerSchema],
      required: [true, "At least one passenger is required"],
      validate: {
        validator: (passengers) => passengers.length > 0,
        message: "At least one passenger is required",
      },
    },
    totalCost: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

bookingSchema.plugin(mongooseAggregatePaginate);

const Booking = mongoose.model("Booking", bookingSchema);

export { Booking };
