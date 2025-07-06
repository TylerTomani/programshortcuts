const dropTopics = document.querySelectorAll('.topics > li > a')
import { mainLandingPage } from "./injectPage.js"
import { fetchHtml } from "./injectPage.js"
let clickedListItem 
dropTopics.forEach(el => {
    const parentUl = el.closest('li')
    const ul = parentUl.querySelector('ul')
    console.log(ul)
    ul.classList.add('hide')
    el.addEventListener('click', toggleSubTopics)
    el.addEventListener('focusout', ()=>{
        clickedListItem = ''
    })
})
function toggleSubTopics(e){
    const parentUl = e.target.closest('li')
    const ul = parentUl.querySelector('ul')
    if(!ul){
        
        if(e.target == clickedListItem){
            mainLandingPage.focus()
        }
        clickedListItem = e.target
        return
    }
    ul.classList.toggle('hide')
    if(!ul.classList.contains('hide') && e.target == clickedListItem){
        fetchHtml(e.target.href)
        mainLandingPage.focus()
        console.log('yes')
        if(ul.classList.contains('hide')){
            ul.classList.remove('hide')
        }
        
    } else {
        fetchHtml(e.target.href)
        

    }
    
    
    clickedListItem = e.target
}