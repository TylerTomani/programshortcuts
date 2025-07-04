import { letterFocus } from "./letterFocus.js";
import { stepFocus } from "../videos-page/js/step-focus.js";
import { playVids } from "../videos-page/js/play-vid.js";

    
export const sideBarLinks = document.querySelectorAll(' .side-bar > .side-bar-ul-container li a');
export const mainLandingPage = document.querySelector('.main-landing-page');

let lastPageClicked
let clickedLink = false
const allAs = document.querySelectorAll('a')
allAs.forEach(a => {
    if(a.hasAttribute('target')){
        a.addEventListener('click', e => {
            window.open(e.target.href,'_blank')
        })
    }
        
})
sideBarLinks.forEach(link => {
    
    if(link.hasAttribute('autofocus')){
        // console.log(link)
        fetchHtml(link.href)    
    }
    link.addEventListener('click',(e) => {
        e.preventDefault();
        e.stopPropagation();
        if(e.target.hasAttribute('target')){
            return
        }
        clickedLink = true
        const anchor = e.target.closest('a');
        if (!anchor) return;
        fetchHtml(anchor.getAttribute('href'));
        // const aLinks = mainLandingPage.querySelectorAll('.page-container a')
        // aLinks.forEach(el => {
        //     if(el.hasAttribute('autofocus')){
        //         el.removeAttribute('autofocus')
        //     }
        // })
    });
    link.addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        if(e.target.hasAttribute('target')){
            return
        }
        if(key === 'enter' && e.target == lastPageClicked && clickedLink){
            fetchHtml(e.target.href)
            // mainLandingPage.focus()
        } else if(key == 'enter'){
            clickedLink = true
            letterFocus()
            fetchHtml(e.target.href)
        
        }
        lastPageClicked = e.target
    });
});
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
                fetchHtml(href);
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
                fetchHtml(href);
            }
        });
    })
    
}

// letterFocus()
