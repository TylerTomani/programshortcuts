import { letterFocus } from "./letterFocus.js";

const links = document.querySelectorAll('.side-bar > ul > li > a');
const mainLandingPage = document.querySelector('.main-landing-page');

links.forEach(link => {
    if(link.hasAttribute('autofocus')){
        fetchHtml(link.href)
    }
    link.addEventListener('click',   (e) => {
        e.preventDefault();
        e.stopPropagation();

        const anchor = e.target.closest('a');
        if (!anchor) return;
        fetchHtml(anchor.getAttribute('href'));

    });
});

async function fetchHtml(href) {
    fetch(href)
        .then(response => response.text())
        .then(html => {
            console.log(html)
            mainLandingPage.innerHTML = ''
            mainLandingPage.innerHTML = html
            letterFocus()
        })
    
}
letterFocus()