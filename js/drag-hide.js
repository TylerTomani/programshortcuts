let startX = 0;
let endX = 0;
const sidebar = document.querySelector('.side-bar');

// Touch start
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

// Touch move
document.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

// Touch end
document.addEventListener('touchend', () => {
  const swipeDistance = startX - endX;

  // Detect left swipe (more than 50px)
  if (swipeDistance > 50) {
    sidebar.classList.add('hidden');
  }
  // Optionally, allow swipe right to show again
  else if (swipeDistance < -50) {
    sidebar.classList.remove('hidden');
  }
});
