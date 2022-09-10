import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    const conect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(
      `mongodb conncté avec success a l'adresse ${conect.connection.host} `
    );
  } catch (error) {
    console.log(`Erreur:${error.message}`);

    process.exit(1);
  }
};

export default dbConnect;
