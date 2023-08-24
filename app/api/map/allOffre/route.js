import { connectToDB } from "@utils/database";
import Offre from '@models/Offre';  

export async function GET(request) {
  await connectToDB(); // Se connecte à la base de données

  try {
    // Interroge la collection 'offre' via le modèle Offre
    const offres = await Offre.find().select('position offreMetier tarifOffre');

    return new Response(JSON.stringify(offres), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error) {
    console.error('There was an error fetching the offers', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
