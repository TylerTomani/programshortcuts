import { keyboardNav } from "./nav/keyboard-nav.js";

export const mainLandingPage = document.querySelector('.main-landing-page');

export async function injectContent(href) {
    if(href){
        fetch(href)
            .then(response => response.text())
            .then(html => {
                mainLandingPage.innerHTML = ``
                mainLandingPage.innerHTML = html
                const aLinks = mainLandingPage.querySelectorAll('.page-container a')
                openPageLinks(aLinks)
                keyboardNav()
            })
    }
}
function openPageLinks(aLinks){
    // comment out Below Here when NOT WORKING on this
    // Use this when working within sidebar link page
    const AllLinks = document.querySelectorAll('a')
    AllLinks.forEach(el => {
        console.log(el)
        if(el.id === 'loadLink'){
            injectContent(el.href)
        }
    })
    // comment out Above Here when NOT WORKING on this
    aLinks.forEach(link => {
        if(link.hasAttribute('autofocus') && !clickedLink){
            const href = link.getAttribute('href');
            // Optional: check that it's a local/internal link
            if (!href.startsWith('http')) {
                injectContent(href);
            } 
            
        }
        
        link.addEventListener('focus', (e) => {
        })
        link.addEventListener('click', e => {
            e.preventDefault();
            const anchor = e.target.closest('a');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (!href) return;
            keyboardNav()
            // Optional: check that it's a local/internal link
            if (!href.startsWith('http')) {
                injectContent(href);
            }
        });
    })

    
}


