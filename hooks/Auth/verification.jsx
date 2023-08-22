export const verifyVerificationCode = async (phoneNumber, verificationCode) => {
  
  console.log("Test sending verification code on the hook, Phone : " + phoneNumber + "\n" + "Verification code : " + verificationCode);
  
  console.log("Or try, Log des donnees avant l'envoi : Phone : " + phoneNumber + " Code : " + verificationCode)

  try {
    console.log("Dans le try, Log des donnees avant l'envoi : Phone : " + phoneNumber + " Code : " + verificationCode)
    
    const response = await fetch('/api/auth/verification', {
      method: "POST",
      body: {
        verification_code: verificationCode, 
        phone_number: phoneNumber,
      }
    })

    console.log("Content of the result : " + result);

    console.log("verification code and phone number are sent on the backend", "it's : " + phoneNumber + " and " + verificationCode)
    
    console.log("Valeur de la reponse : " + result.data.success);

    console.log("Valeur de la data reponse : " + result.data);

    return response.data; // Assuming the API returns a "success" property indicating whether the login was successful or not
  
  }catch (error) {
    console.error('Error performing verification code phone number and verification code are not sent on the backend:', error);
    const data = {success: false, fallback: "Erreur lors de la connection a la base de donne"}
    return data;
  }
}

