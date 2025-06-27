import { letterFocus } from "./letterFocus.js";
const links = document.querySelectorAll(' .side-bar > .side-bar-ul-container > ul > li > a');
const mainLandingPage = document.querySelector('.main-landing-page');
let lastPageClicked 
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
        const aLinks = mainLandingPage.querySelectorAll('.page-container a')
        aLinks.forEach(el => {
            if(el.hasAttribute('autofocus')){
                el.removeAttribute('autofocus')
            }
        })
    });
    link.addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        if(key === 'enter' && e.target == lastPageClicked){
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
            const aLinks = mainLandingPage.querySelectorAll('.page-container a')
            openPageLinks(aLinks)
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
        if(link.hasAttribute('autofocus')){
            // const anchor = link.target.closest('a');
            // if (!anchor) return;
            const href = link.getAttribute('href');
            console.log(link.href)
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
letterFocus()
