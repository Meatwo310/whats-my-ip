export async function onRequest(context) {
  const ip = context.request.headers.get('CF-Connecting-IP') || 'Unknown';
  const ipv6 = context.request.headers.get('CF-Connecting-IPv6');
  const country = context.request.headers.get('CF-IPCountry') || 'Unknown';
  const data = { ip, country };
  if (ipv6) data.ipv6 = ipv6;
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
