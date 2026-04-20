export async function onRequest(context) {
  const ip = context.request.headers.get('CF-Connecting-IP') || 'Unknown';
  const ipv6 = context.request.headers.get('CF-Connecting-IPv6') || 'Unknown';
  const country = context.request.headers.get('CF-IPCountry') || 'Unknown';
  return new Response(JSON.stringify({ ip, ipv6, country }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
