import { connectToDB } from "../../../../../utils/database";
import Demande from '../../../../../models/Demande';
import { useRouter, useParams } from "next/router";


export async function GET(request, params) {
  const router = useRouter();
  const params = useParams();
  try {
    await connectToDB();

    const phoneNumber = params.phone;
    console.log('phone number : ', phoneNumber)

    const demande = await Demande.findOne({ phone_number: phoneNumber });

    if (!demande) {
      return new Response(JSON.stringify({ error: 'Demande introuvable' }), { status: 404 });
    }

    return new Response(JSON.stringify(demande), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('There was an error fetching the requests based on phone number', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
