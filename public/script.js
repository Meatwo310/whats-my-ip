document.getElementById('btn').addEventListener('click', async () => {
  const btn = document.getElementById('btn');
  const table = document.getElementById('result');
  const error = document.getElementById('error');
  btn.disabled = true;
  try {
    const res = await fetch('/api/ip');
    const data = await res.json();
    document.getElementById('ip').textContent = data.ip;
    const ipv6Row = document.getElementById('ipv6-row');
    if (data.ipv6) {
      document.getElementById('ipv6').textContent = data.ipv6;
      ipv6Row.hidden = false;
    } else {
      ipv6Row.hidden = true;
    }
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    document.getElementById('country').textContent = regionNames.of(data.country) ?? data.country;
    error.textContent = '';
  } catch {
    table.hidden = true;
    error.textContent = 'failed';
  } finally {
    btn.disabled = false;
  }
});
