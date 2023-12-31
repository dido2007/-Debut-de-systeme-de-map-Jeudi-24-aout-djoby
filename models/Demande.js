const mongoose = require('mongoose');

const DemandeSchema = new mongoose.Schema({
  annonceType: String,
  phone_number: String,
  descriptionDemande: String,
  disponibiliteDemande: String,
  imagesDemande: [String], // ou [Buffer] si vous stockez les images en tant que binaires
  tarifDemande: String,
  createdDate: { 
      type: Date,
      default: Date.now 
    },
  position: {
    latitude: { type: Number },
    longitude: { type: Number }
    },
  demandeMetier: String
});

let Demande;
if (mongoose.models.Demande) {
    Demande = mongoose.model('Demande');
} else {
    Demande = mongoose.model('Demande', DemandeSchema);
}


module.exports = Demande;
