export const sendVerificationCode = async (phoneNumber) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: "POST",
      body: {
        phone_number: phoneNumber,
      }
    });
    console.log("phone number is sent on the backend", "it's : " + phoneNumber)
    console.log("response.data" + response.data);
    console.log("response.data.success" + response.data.success)
    console.log("response.data.fallback" + response.data.fallback)
    return response.data; // Assuming the API returns a "success" property indicating whether the login was successful or not
  } catch (error) {
    console.error('Error performing login phone number is not sent on the backend:', error);
    const data = {success: false, fallback: "Erreur lors de la connection a la base de donne"}
    return data;
  }
};