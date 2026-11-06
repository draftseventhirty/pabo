async function qr() {
  const qrFrame = document.getElementById("qr-frame");
  const link = document.getElementById("qr-input").value;

  const res = await fetch('https://theqrcode.io/api/public/qr-codes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'url',
      content: link,
    }),
  });

  const { qrImage } = await res.json();
  // qrImage — data:image/png;base64,...
  qrFrame.src = qrImage;
}
