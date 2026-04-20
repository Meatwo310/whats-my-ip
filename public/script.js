document.getElementById('btn').addEventListener('click', async () => {
  const table = document.getElementById('result');
  const error = document.getElementById('error');
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
    document.getElementById('country').textContent = data.country;
    error.textContent = '';
  } catch {
    table.hidden = true;
    error.textContent = 'failed';
  }
});
