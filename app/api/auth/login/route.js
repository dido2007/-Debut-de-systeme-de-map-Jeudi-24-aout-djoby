require('dotenv').config();
import { connectToDB } from "@utils/database";
import 'twilio';
import User from '@models/users';
import VerificationCodePost from '@models/verificationcode';

let verification_code = null;

console.log("Valeur de depart du verification code : " + verification_code)

async function sendVerificationSMS(phone_number) {
  verification_code = Math.floor(100000 + Math.random() * 900000);

  console.log("Account SID : " + process.env.ACCOUNTSID + " \n ");
  console.log("AUTHTOKEN : " + process.env.AUTHTOKEN + " \n ");
  console.log("Code de verification : " + verification_code + " \n ");

  try {
    const twilioClient = twilio(process.env.ACCOUNTSID, process.env.AUTHTOKEN);

    console.log("Valeur de la variable twilioClient : " + twilioClient + " \n ");

    const message = await twilioClient.messages.create({
      body: `Bienvenue sur DJOBY. Votre code de vérification est : ${verification_code}`,
      from: process.env.TWILIONUMBER,
      to: phone_number,
    });

    console.log(`SMS envoyé avec succès. SID du message : ${message.sid}`);

    return verification_code;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'envoi du SMS :', error);
    return false
  }
}


async function verificationSystem (phone_number) {
  try {
    await connectToDB();
    const verificationSent = await sendVerificationSMS(phone_number);
    console.log("Contenu de la variable verification sent : " + verificationSent + " \n ")
    if (verificationSent) {
      console.log(verification_code);
      const verificationCodePost = new VerificationCodePost({verification_code, phone_number})
      await verificationCodePost.save();
      console.log("verification_code ajoute avec success : ", verificationCodePost + " \n ");
      return true
    } else {
      console.log("Echec lors de l'ajout du code de verification dans la base de donne." + " \n ")
      return false 
    }
  }
  catch(error) {
    console.error(error);
    return res.json({ success: false, fallback: "Une erreur est survenue : " + error });
  }
};

export const POST = async (request, { body }) => {
    try {
        const { phone_number } = body.phone_number;

        console.log("La variable phone_number est égale à : " + phone_number + " \n ");

        await connectToDB();

        const user = await User.findOne({
            phoneNumber: phone_number,
        });

        console.log("Le résultat de la requête à la base de données : " + user + " \n ");

        if (!user) {
            console.log("Numéro de téléphone non trouvé dans la base de données" + " \n ");
            return new Response(JSON.stringify({
                success: false,
                fallback: "Ce numéro n'existe pas, veuillez en essayer un autre ou veuillez créer un compte."
            }), { status: 400 });
        }

        if (verificationSystem(phone_number)) {
            return new Response(JSON.stringify({
                success: true,
                fallback: "Le code de vérification a été envoyé avec succès"
            }), { status: 200 });
        } else {
            return new Response(JSON.stringify({
                success: false,
                fallback: "Une erreur est survenue lors de l'envoi du code de vérification"
            }), { status: 500 });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            success: false,
            fallback: "Une erreur est survenue : " + error
        }), { status: 500 });
    }
}
