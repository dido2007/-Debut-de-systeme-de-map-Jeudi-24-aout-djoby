const mongoose = require('mongoose');

// Votre fonction de connexion (comme vous l'avez déjà fournie)
let isConnected = false;

const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://gamenotcreator:didou1234@webapp.mymezal.mongodb.net/DJOBY", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// Fonction principale pour tester la connexion
const testConnection = async () => {
  await connectToDB();

  if (isConnected) {
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Available collections:', collections);
  }

  // Fermer la connexion après le test
  mongoose.connection.close();
}

testConnection();
