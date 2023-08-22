import Annonce from "@models/annonce";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { typeDeService, typeDeMetier, description, disponibilites, prix } = await request.json();

    try {
        await connectToDB();
        const newAnnonce = new Annonce({ typeDeService, typeDeMetier, description, disponibilites, prix });

        await newAnnonce.save();
        return new Response(JSON.stringify(newAnnonce), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new annonce", { status: 500 });
    }
}