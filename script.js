const leaveBtn = document.getElementById('leave-message-btn');
const popup = document.getElementById('message-popup');
const closeBtn = document.getElementById('close-popup-btn');
const sendBtn = document.getElementById('send-message-btn');
const messageText = document.getElementById('message-text');

leaveBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

sendBtn.addEventListener('click', async () => {
  const message = messageText.value.trim();
  if (!message) return alert('Please write a message.');

  // Get country info
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();
  const country = data.country_name || "Unknown";

  // Discord webhook payload
  const webhookURL = 'YOUR_WEBHOOK_URL_HERE';
  await fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `**Anonymous Message** from ${country}:\n${message}`
    })
  });

  alert('Message sent!');
  messageText.value = '';
  popup.style.display = 'none';
});
