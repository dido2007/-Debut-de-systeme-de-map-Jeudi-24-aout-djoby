export async function GET(request) {
  try {
      return new Response(JSON.stringify({ message: 'Test route works!' }), {
          headers: { 'Content-Type': 'application/json' },
      });
  } catch (error) {
      console.error("Erreur lors de la gestion de la requête:", error);
      return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
      });
  }
}
