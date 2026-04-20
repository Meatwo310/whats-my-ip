export async function onRequest(context) {
  const ip = context.request.headers.get('CF-Connecting-IP') || 'Unknown';
  return new Response(JSON.stringify({ ip }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
