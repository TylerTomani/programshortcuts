let startX = 0;
let endX = 0;
let isSidebarHidden = false;
const sidebar = document.querySelector('.side-bar');
const screenWidth = window.innerWidth;

// Touch start
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

// Touch move
document.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

// Touch end logic
document.addEventListener('touchend', () => {
  const swipeDistance = endX - startX;

  // HIDE SIDEBAR: Swipe left anywhere on screen (more than 50px)
  if (swipeDistance < -50) {
    sidebar.classList.add('hidden');
    isSidebarHidden = true;
  }

  // SHOW SIDEBAR: Swipe right from the far left (startX < 30px) and go at least 50% of screen
  else if (swipeDistance > screenWidth * 0.5 && startX < 30) {
    sidebar.classList.remove('hidden');
    isSidebarHidden = false;
  }
});
