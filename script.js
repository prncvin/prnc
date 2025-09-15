// ======================
// Custom Cursor
// ======================
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// ======================
// Theme Switching
// ======================
const themeButtons = document.querySelectorAll('.theme-button');
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.className = ''; // reset
    document.body.classList.add(btn.dataset.theme);
  });
});

// ======================
// Profile Animation
// ======================
const profileBlock = document.getElementById('profile-block');
window.addEventListener('load', () => {
  profileBlock.classList.add('profile-appear');
});

// ======================
// Cursor Trail (Optional extra feature)
// ======================
const trailElements = [];
function createTrail(x, y) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = x + 'px';
  trail.style.top = y + 'px';
  document.body.appendChild(trail);
  trailElements.push(trail);
  setTimeout(() => {
    trail.remove();
    trailElements.shift();
  }, 500);
}

document.addEventListener('mousemove', e => {
  createTrail(e.clientX, e.clientY);
});

// ======================
// Leave a Message Popup
// ======================
const leaveBtn = document.getElementById('leave-message-btn');
const popup = document.getElementById('message-popup');
const closeBtn = document.getElementById('close-popup-btn');
const sendBtn = document.getElementById('send-message-btn');
const messageText = document.getElementById('message-text');

leaveBtn.addEventListener('click', () => popup.style.display = 'block');
closeBtn.addEventListener('click', () => popup.style.display = 'none');

sendBtn.addEventListener('click', async () => {
  const message = messageText.value.trim();
  if (!message) return alert('Please write a message.');

  try {
    // Get country info from IP
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const country = data.country_name || "Unknown";

    // Send to Discord webhook
    const webhookURL = 'https://discord.com/api/webhooks/1417117093501079562/YPBnUJa-FQEVYoz-l1jDChW31BZTUlRBX43UGTIAEhVhSoxyayV6bW4KewCCidtiaD7T';
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
  } catch (err) {
    console.error(err);
    alert('Error sending message.');
  }
});

// ======================
// Glitch Overlay Effect
// ======================
const glitchOverlay = document.querySelector('.glitch-overlay');
function glitchEffect() {
  glitchOverlay.style.opacity = Math.random() * 0.3;
  setTimeout(() => glitchOverlay.style.opacity = 0, 100);
}
setInterval(glitchEffect, 500);

// ======================
// Volume & Transparency Sliders
// ======================
const volumeSlider = document.querySelector('.volume-slider');
const transparencySlider = document.querySelector('.transparency-slider');

if (volumeSlider) {
  volumeSlider.addEventListener('input', e => {
    // Example: control global audio volume
    const volume = e.target.value;
    // audioElement.volume = volume / 100;
  });
}

if (transparencySlider) {
  transparencySlider.addEventListener('input', e => {
    const opacity = e.target.value / 100;
    document.body.style.setProperty('--background-opacity', opacity);
  });
}

// ======================
// Badge Flip Animation
// ======================
const badges = document.querySelectorAll('.badge-container');
badges.forEach(badge => {
  badge.addEventListener('mouseenter', () => {
    badge.style.transform = 'rotateY(180deg)';
  });
  badge.addEventListener('mouseleave', () => {
    badge.style.transform = 'rotateY(0deg)';
  });
});
