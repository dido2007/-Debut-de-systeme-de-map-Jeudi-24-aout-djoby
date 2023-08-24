const mongoose = require('mongoose');
const Offre = require('../models/Offre');
const Demande = require('../models/Demande');

const SAMPLE_SIZE = 15; // Nombre d'offres et de demandes à créer

const METIERS = ['Marketing Digital-SEO', 'Rédaction & Traduction-Rédaction d\'articles', 'Design & Graphisme-Logo'];

async function connectToDB() {
    try {
        await mongoose.connect('mongodb+srv://gamenotcreator:didou1234@webapp.mymezal.mongodb.net/DJOBY', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Failed to connect to database:', error);
        process.exit(1);
    }
}

function getRandomPositionInTunisia() {
    const LATITUDE_RANGE = [30.2304, 37.3441]; // Approximatif
    const LONGITUDE_RANGE = [7.5249, 11.1085]; // Approximatif

    return {
        latitude: LATITUDE_RANGE[0] + Math.random() * (LATITUDE_RANGE[1] - LATITUDE_RANGE[0]),
        longitude: LONGITUDE_RANGE[0] + Math.random() * (LONGITUDE_RANGE[1] - LONGITUDE_RANGE[0])
    };
}

async function seedDatabase() {
    for (let i = 0; i < SAMPLE_SIZE; i++) {
        const position = getRandomPositionInTunisia();
        const metier = METIERS[Math.floor(Math.random() * METIERS.length)];

        const newOffre = new Offre({
            annonceType: 'offre',
            offreMetier: metier,
            descriptionOffre: 'Description exemple pour ' + metier,
            disponibiliteOffre: 'Disponible',
            tarifOffre: (Math.random() * 300).toFixed(2).toString(),
            position
        });

        await newOffre.save();

        const newDemande = new Demande({
            annonceType: 'demande',
            demandeMetier: metier,
            descriptionDemande: 'Description exemple pour ' + metier,
            disponibiliteDemande: 'Recherché',
            tarifDemande: (Math.random() * 300).toFixed(2).toString(),
            position
        });

        await newDemande.save();
    }

    console.log('Data seeded successfully.');
}

async function main() {
    await connectToDB();
    await seedDatabase();
    mongoose.connection.close();
}

main();
