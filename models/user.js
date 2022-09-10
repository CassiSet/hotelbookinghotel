import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Entrez votre nom svp!'],
    },
    email: {
      type: String,
      required: [true, 'Entrez votre email svp!'],
    },
    password: {
      type: String,
      required: [true, 'Entrez votre mot de passe svp!'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
