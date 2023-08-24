const mongoose = require('mongoose');

const OffreSchema = new mongoose.Schema({
  annonceType: String,
  offreMetier: String,
  descriptionOffre: String,
  disponibiliteOffre: String,
  imagesOffre: [String], // ou [Buffer] si vous stockez les images en tant que binaires
  tarifOffre: String,
  createdDate: { 
      type: Date,
      default: Date.now 
  },
  position: {
    latitude: { type: Number },
    longitude: { type: Number }
 }
});

let Offre;

if (mongoose.models.Offre) {
  Offre = mongoose.model('Offre'); // Utilisez le modèle existant
} else {
  Offre = mongoose.model('Offre', OffreSchema); // Définissez le modèle
}

module.exports = Offre;
