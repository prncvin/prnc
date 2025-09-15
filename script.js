:root {
  --primary-color: #fff;
  --secondary-color: #000;
  --background-dark: #000;
  --text-color: #fff;
}

/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Space Mono', monospace;
  background: var(--background-dark);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

/* Main content */
#main-content h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

#main-content p {
  margin-bottom: 20px;
  font-size: 1rem;
}

/* Buttons */
button {
  padding: 10px 20px;
  background: var(--text-color);
  color: var(--background-dark);
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  opacity: 0.8;
}

/* Message Popup */
#message-popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--background-dark);
  color: var(--text-color);
  padding: 20px;
  border: 2px solid var(--text-color);
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  z-index: 1000;
}

#message-popup h2 {
  margin-bottom: 10px;
}

#message-text {
  width: 100%;
  height: 100px;
  background: var(--background-dark);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  resize: none;
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
}
