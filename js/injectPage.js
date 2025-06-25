import { letterFocus } from "./letterFocus.js";

const links = document.querySelectorAll('.side-bar > ul > li > a');
const mainLandingPage = document.querySelector('.main-landing-page');
let lastPageClicked = 
links.forEach(link => {
    if(link.hasAttribute('autofocus')){
        console.log(link)
        
        fetchHtml(link.href)
    
    }
    link.addEventListener('click',   (e) => {
        e.preventDefault();
        e.stopPropagation();
        const anchor = e.target.closest('a');
        if (!anchor) return;
        fetchHtml(anchor.getAttribute('href'));
    });
    link.addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        if(key === 'enter' && e.target == lastPageClicked){
            console.log('yes')
            mainLandingPage.focus()
        } else if(key == 'enter'){
            fetchHtml(e.target.href)
        }
        lastPageClicked = e.target
    });
});
async function fetchHtml(href) {
    fetch(href)
        .then(response => response.text())
        .then(html => {
            mainLandingPage.innerHTML = ``
            mainLandingPage.innerHTML = html
        })
}
letterFocus()