const sidebar = document.querySelector('.side-bar');
let startX = 0;
let endX = 0;
let touchStartTime = 0;
if (window.innerWidth <= 768) {

}


document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  touchStartTime = new Date().getTime();
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  const swipeDistance = endX - startX;
  const swipeDuration = new Date().getTime() - touchStartTime;

  // Swipe left to hide sidebar
  if (swipeDistance < -50) {
    sidebar.classList.add('hidden');
  }

  // Swipe from edge (x < 20) right at least 50% of screen width to show sidebar
  if (
    startX < 20 &&
    swipeDistance > window.innerWidth * 0.5 &&
    sidebar.classList.contains('hidden')
  ) {
    sidebar.classList.remove('hidden');
  }
});
