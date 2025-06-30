const sidebar = document.querySelector('.side-bar');

let startX = 0;
let endX = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  const swipeDistance = endX - startX;

  if (swipeDistance < -50) {
    // Swipe left detected – toggle visibility
    sidebar.classList.toggle('hidden');
  }
});
