import { letterFocus } from "./letterFocus.js"
const pages = document.querySelectorAll('.side-bar ul li a')
const mainLandingPage = document.querySelector('.main-landing-page')
pages.forEach(el => {
    if(el.hasAttribute('autofocus')){
        loadPageIntoMainContent(el.href)
    }
    el.addEventListener('click', e => {
        e.preventDefault()
        loadPageIntoMainContent(e.target.href)
    })
})


function loadPageIntoMainContent(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const newContent = doc.body.children;
      const mainContent = document.querySelector('.main-landing-page');
      mainContent.innerHTML = ''; // clear existing
      [...newContent].forEach(el => mainContent.appendChild(el));

      letterFocus(); // re-init shortcut logic if needed
    });
}
