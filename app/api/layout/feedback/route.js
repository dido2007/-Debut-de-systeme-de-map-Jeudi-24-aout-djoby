import Feedback from "@models/feedback";

export const POST = async (request, { body }) => {
    if (request.method === 'POST') {
        try {
            try {
                const title = body.title;
                const description = body.description;
        
                const feedback = new Feedback({
                    title: title,
                    description: description,
                });
        
                await feedback.save()
        
                return new Response(JSON.stringify({
                    success: true, 
                    fallback: "Le feedback a ete envoye avec succes"
                }));
              } catch (error) {
                console.error(error);
                return new Response(JSON.stringify({ 
                    success: false,
                    fallback: "An error occurred" 
                }));
              }
        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify({
                success: false,
                fallback: "Une erreur est survenue : " + error
            }), { status: 500 });
        }
    } else {
        return new Response(JSON.stringify({ 
            fallback: 'Méthode non autorisée' 
        }), { status: 405 });
    }
}
