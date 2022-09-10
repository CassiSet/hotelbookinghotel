import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Room',
    },
    roomname: {
      type: String,
      required: true,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    amoutPaid: {
      type: Number,
      required: true,
    },
    dateOfStays: {
      type: Number,
      required: true,
    },
    paiemntInfo: {
      id: {
        type: String,
        // required: true,
      },
      status: {
        type: String,
        // required: true,
      },
    },
    paidAt: {
      type: Date,
      // required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model('Booking', bookingSchema);
