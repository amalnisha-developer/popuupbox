// Get elements
const popup = document.getElementById('popup');
const showPopupButton = document.getElementById('showPopup');
const closeButton = document.getElementById('close');

// Function to open popup
showPopupButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Function to close popup
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
