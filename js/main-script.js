import { injectContent } from "./inject-content.js";
import { letterFocus } from "./letterFocus.js";
import { darkMode } from "./dark-mode.js";
export const sideBarLinks = document.querySelectorAll(' .side-bar-ul-container li a, #sideBarBtn');
let clickedLink = false
let lastPageClicked
darkMode()
letterFocus()
sideBarLinks.forEach(link => {
    
    if(link.hasAttribute('autofocus')){
        // console.log(link)
        injectContent(link.href) 
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
        injectContent(anchor.getAttribute('href'));
        // const aLinks = mainLandingPage.querySelectorAll('.page-container a')
        // aLinks.forEach(el => {
        //     if(el.hasAttribute('autofocus')){
        //         el.removeAttribute('autofocus')
        //     }
        // })
        letterFocus()
        console.log(e.target)
    });
    link.addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        if(e.target.hasAttribute('target')){
            return
        }
        if(key === 'enter' && e.target == lastPageClicked && clickedLink){
            injectContent(e.target.href)
            // mainLandingPage.focus()
        } else if(key == 'enter'){
            clickedLink = true
            letterFocus()
            injectContent(e.target.href)
        
        }
        lastPageClicked = e.target
    });
    
});