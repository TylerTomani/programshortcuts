
export const asideMenu = document.getElementById('asideMenu')
export const asideBtn = document.getElementById('asideBtn')
export const toggleAsideBtn = document.getElementById('toggleAsideBtn')
const body = document.querySelector('body')
const mainMastheadContainer = document.getElementById('mainMastheadContainer')
const content = document.getElementById('content')
let showingAside = false


asideMenu.classList.add('hide-aside')

toggleAsideBtn.addEventListener('click', e => {
    toggleAside()
})


asideBtn.addEventListener('keydown',e => {
    let letter = e.key.toLowerCase()
    if(letter == 'enter'){
        // toggleAside()
    }   
})
asideBtn.addEventListener('click',e => {
    e.preventDefault()
    toggleAside()    
})


export function toggleAside() {
    greyOut()
    if(asideMenu.classList.contains('hide-aside')){
        asideMenu.classList.remove("hide-aside");
        asideMenu.classList.add("show-aside");
        showingAside = true
    } else {
        asideMenu.classList.remove("show-aside");
        asideMenu.classList.add("hide-aside");
        showingAside = false
    }

    if(asideMenu.classList.contains('show-aside')){
        asideBtn.focus()
        showingAside = true
    } else {
        toggleAsideBtn.focus()
    }
    
}

function greyOut(){
    if(!mainMastheadContainer.classList.contains('greyout')){
        mainMastheadContainer.classList.add('greyout')
        content.classList.add('greyout')
    } else {
        mainMastheadContainer.classList.remove('greyout')
        content.classList.remove('greyout')
    }
}