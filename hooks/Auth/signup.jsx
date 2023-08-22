export const sendVerificationCode = async (phoneNumber) => {
    try {

      const response = await fetch('/api/auth/signup-verification', {
        method: "POST",
        body: {phone_number: phoneNumber},
      });
      console.log("phone number is sent on the backend", "it's : " + phoneNumber)
      return response.data; // Assuming the API returns a "success" property indicating whether the login was successful or not
    } catch (error) {
      console.error('Error performing login phone number is not sent on the backend:', error);
      const data = {success: false, fallback: "Erreur lors de la connection a la base de donne"}
      return data;
    }
};

export const finishRegistration = async (data) => {
  delete data.cartype;

  const formData = new FormData();
  formData.append('avatar', data.avatar);

  for (let i = 0; i < data.projectimages.length; i++) {
    formData.append('projectImages', data.projectimages[i]);
  }

  formData.append('data', JSON.stringify(data));

  try {
    const response = await fetch('/api/auth/signup', {
      methode: "POST",
      body: formData
    });
    return response.data;
  
  } catch (error) {
    console.error('Error performing the signup: ', error);
    const data = {success: false, fallback: "Erreur lors de la connection a la base de donne"}
    return data;
  }
}