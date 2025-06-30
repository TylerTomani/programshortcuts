


  addEventListener('keydown', e => {
    let key = e.key.toLowerCase();
    if (key === 'k' && e.shiftKey && e.metaKey) {
      const body = document.querySelector('body');
      const pageContainer = document.querySelector('.page-container');
      const mainShorcutPageContainer = document.getElementById('mainShorcutPageContainer');

      mainShorcutPageContainer?.classList.toggle('dark-mode');
      body.classList.toggle('dark-mode');
      pageContainer?.classList.toggle('dark-mode');
    } else {
    }
  });
