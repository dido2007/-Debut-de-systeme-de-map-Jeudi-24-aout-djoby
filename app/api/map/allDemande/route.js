import { connectToDB } from "../../../../utils/database";
import Demande from '../../../../models/Demande';  

export async function GET(request) {
  try {
    await connectToDB();

    const queryParams = new URL(request.url).searchParams;
    const metier = queryParams.get('metier');

    let queryObj = {};
    if (metier) {
      queryObj.demandeMetier = metier;
    }

    const demandes = await Demande.find(queryObj).select('position demandeMetier tarifDemande ');

    return new Response(JSON.stringify(demandes), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('There was an error fetching the requests', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
