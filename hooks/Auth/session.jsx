export const sessionInitialization = async (phoneNumber) => { // Accept setUser as a parameter
  console.log("Phone number : " + phoneNumber);

  try {
    const response = await fetch('/api/auth/session', {
      method: "POST",
      body: {
        phone_number: phoneNumber,
      }
    });    
    return response.data;
    
  } catch (error) {
    console.error('Error performing the session: ', error);
    const data = { success: false, fallback: "Erreur lors de la connexion à la base de données" };
    return data;
  }  
};