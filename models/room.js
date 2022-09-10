import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      requiered: [true, 'Entrée le nom de la chambre svp!'],
      trim: true,
      maxLength: [
        100,
        'Le titre de la chambre doit etre inferieur a 100 catactere',
      ],
    },
    price: {
      type: Number,
      requiered: [true, 'Entrée le prix de la chambre svp!'],
      maxLength: [
        100,
        'Le prix de la chambre doit etre inferieur a 4 catactere',
      ],
      default: 0.0,
    },

    capacityGuess: {
      type: Number,
      requiered: [true, 'Entrée la capacité de la chambre svp!'],
    },
    internet: {
      type: String,
      enum: ['Oui', 'Non'],
      default: 'Oui',
    },
    animauxAutorise: {
      type: String,
      enum: ['Oui', 'Non'],
      default: 'Oui',
    },

    roomSize: {
      type: Number,
      required: [true, 'Entrée la taille de la chambre svp!'],
    },

    category: {
      type: String,
      requiered: [true, 'Ajouter votre categorie svp!'],
      enum: ['simple', 'climatisée', 'ventilée'],
      default: 'simple',
    },
    description: {
      type: String,
      requiered: [true, 'Entrée la description de la chambre svp!'],
    },
    image: [
      {
        type: String,
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    numberOfRating: {
      type: Number,
      default: 0,
    },
    comment: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
        name: {
          type: String,
          required: true,
        },
        text: {
          type: String,
          requiered: [true, 'Saisissez votre commentaire svp!'],
        },
        start: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Room || mongoose.model('Room', roomSchema);
