import { letterFocus } from "./letterFocus.js";
import { stepFocus } from "../videos-page/js/step-focus.js";
import { playVids } from "../videos-page/js/play-vid.js";


export const mainLandingPage = document.querySelector('.main-landing-page');

let lastPageClicked
let clickedLink = false


export async function fetchHtml(href) {
    fetch(href)
        .then(response => response.text())
        .then(html => {
            mainLandingPage.innerHTML = ``
            mainLandingPage.innerHTML = html
            const aLinks = mainLandingPage.querySelectorAll('.page-container a')
            openPageLinks(aLinks)
            stepFocus()
            playVids()
            letterFocus()
        })
}
function openPageLinks(aLinks){
    aLinks.forEach(link => {
        // link.addEventListener('keydown', e => {
        //     e.stopPropagation()
        //     console.log(e.target)      
        //     e.preventDefault()
        //     let key = e.key
        //     if(key === 13){
        //         console.log(('yes'))
        //         console.log(e.target)
        //         fetch(e.target.href)
        //     }
        //     // window(e.target.href,'_blank')
        // })
        if(link.hasAttribute('autofocus') && !clickedLink){
            // const anchor = link.target.closest('a');
            // if (!anchor) return;
            // console.log(link.href)
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

            // Optional: check that it's a local/internal link
            if (!href.startsWith('http')) {
                injectContent(href);
            }
        });
    })
    
}


