import { connectToDB } from "../../../../../utils/database";
import Demande from '../../../../../models/Demande';  

export async function GET(request, context) {
  try {
    await connectToDB();

    const phoneNumber = context.params.phone;  // On récupère le numéro de téléphone depuis le contexte

    const demande = await Demande.findOne({ phone_number: phoneNumber })
    .select('position demandeMetier tarifDemande descriptionDemande');

return new Response(JSON.stringify(demande), { 
status: 200, 
headers: { 'Content-Type': 'application/json' } 
});


  } catch (error) {
    console.error('There was an error fetching the requests based on phone number', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}