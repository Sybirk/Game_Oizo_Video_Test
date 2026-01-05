export default async (request, context) => {
  const response = await context.next();
  return new Response(response.body, {
    headers: {
      ...Object.fromEntries(response.headers),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*"
    }
  });
};

export const config = {
  path: "/*"
};
