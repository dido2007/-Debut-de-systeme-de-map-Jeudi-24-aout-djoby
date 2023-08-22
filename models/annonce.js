import { Schema, model, models } from 'mongoose';

const AnnonceSchema = new Schema({
//   creator: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//   },
    typeDeService: {
        type: String,
        required: [true, 'Type de metier is required.'],
    },
    typeDeMetier: {
        type: String,
        required: [true, 'Type de metier is required.'],
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
    },
    disponibilites: {
        type: Array,
        required: [true, 'Desponibilites is required.'],
    },
    prix: {
        type: Number,
        required: [true, 'Prix is required.'],
    }
});

const Annonce = models.Prompt || model('Annonce', AnnonceSchema);

export default Annonce;