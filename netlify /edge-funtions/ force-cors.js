export default async (request, context) => {
  // Récupère la réponse standard prévue
  const response = await context.next()
  // Duplique les headers et ajoute CORS
  const headers = new Headers(response.headers)

  headers.set("Access-Control-Allow-Origin", "*")
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS")
  headers.set("Access-Control-Allow-Headers", "*")

  if (request.method === "OPTIONS") {
    // Répond aux requêtes préliminaires (OPTIONS)
    return new Response(null, { status: 204, headers })
  }

  // Retourne la réponse avec les nouveaux headers
  return new Response(response.body, {
    status: response.status,
    headers
  })
}

export const config = {
  path: "/*"
}
