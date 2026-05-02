const fetch = global.fetch || require('node-fetch');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzdXNtaXRoYXJlZGR5X3VkdW11bGFAc3JtYXAuZWR1LmluIiwiZXhwIjoxNzc3NzA2NjQ3LCJpYXQiOjE3Nzc3MDU3NDcsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4NDdlN2QyZi0zYmUxLTQ2ZjMtYWM1NS02MjNiNTI3ZTRiZGQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ1ZHVtdWxhIG5lZWxhIGxvaGl0aGEgc3VzbWl0aGEgcmVkZHkiLCJzdWIiOiIzYWRlMzk4Yy1jZDRhLTRiMmMtYjNlOC02NmUxY2M0NDJkZDMifSwiZW1haWwiOiJzdXNtaXRoYXJlZGR5X3VkdW11bGFAc3JtYXAuZWR1LmluIiwibmFtZSI6InVkdW11bGEgbmVlbGEgbG9oaXRoYSBzdXNtaXRoYSByZWRkeSIsInJvbGxObyI6ImFwMjMxMTAwMTAzNjgiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiIzYWRlMzk4Yy1jZDRhLTRiMmMtYjNlOC02NmUxY2M0NDJkZDMiLCJjbGllbnRTZWNyZXQiOiJoVmNRYWNCa2FSaktoUFdyIn0.lXgXYV8hB8nceY9AcN585sJZwiZ-U0n0RStMF-91En4';

const url = 'http://20.207.122.201/evaluation-service/notifications';

(async () => {
  try {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const status = res.status;
    let body;
    try { body = await res.json(); } catch (e) { body = await res.text(); }
    console.log(JSON.stringify({ status, body }, null, 2));
  } catch (err) {
    console.error('Fetch error:', err.message || err);
    process.exitCode = 2;
  }
})();
