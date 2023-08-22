export const sendFeedback = async (data) => {
  
  try {    
    const response = await fetch('/api/layout/feedback', {
      method: 'POST',
      body: {
        title: data.title, 
        description: data.description,
      }
    })

    console.log(response)
    console.log(response.fallback)
    console.log(response.success)
    console.log(response.body)
    console.log(response.body.response)
    console.log(response.body.success)
    console.log(response.data.success)


    
    return response; // Assuming the API returns a "success" property indicating whether the login was successful or not

  }catch (error) {
    console.error('Error performing verification code phone number and verification code are not sent on the backend:', error);
    const data = {success: false, fallback: "Erreur lors de la connection a la base de donne"}
    return data;
  }
}

