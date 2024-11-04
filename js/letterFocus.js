const macEssentialShortcuts = document.getElementById('macEssentialShortcuts')
const mainContent = document.getElementById('main-content')
const tbd = document.getElementById('tbd')
const mainSearchQuery = document.querySelector('#mainSearch > .search-query > input')
const asideSearchQuery = document.querySelector('#asideSearch > .search-query > input')
const youtubeEssentialShortcuts = document.getElementById('youtubeEssentialShortcuts')
const videosTitle = document.getElementById('videosTitle')

const homeAside = document.getElementById('homeAside')
const videosAside = document.getElementById('videosAside')
const playlistsAside = document.getElementById('playlistsAside')

let asideFocused  = false
let focusSearchQuery = false 
export const showAsideBtn = document.getElementById('showAsideBtn')
addEventListener('keydown', e => {
    let letter = e.key
    if(!focusSearchQuery){
        if(!asideFocused){
            navMainFocus(letter)
        } else {
            navAsideFocus(letter)
        }

    }
})

function navMainFocus(letter){
    switch(letter){
        case 'a':
            // toggleAside()
            // asideBtn.focus()
            break
        case 'h':
            homeAside.focus()
            break
        case 'm':
            mainContent.focus()
            break
        case 'p':
            playlistsAside.focus()
            break
        case 's': 
            mainSearchQuery.focus()
            break
        case 't': 
            tbd.focus()
            break
        case 'v': 
            videosAside.focus()
            break
        case 'y': 
            // youtubeEssentialShortcuts.focus()
            break
        default:
    }
}
function navAsideFocus(letter){
    switch(letter){
        case 'a':
            asideBtn.focus()      
            break
        case 'h':
            homeAside.focus()
            break
        case 'm':
            break
        case 'p':
            playlistsAside.focus()
            break
        case 's': 
            // asideSearchQuery.focus()
            break
        case 'v': 
            videosAside.focus()
            break
        case 'y': 
            // youtubeEssentialShortcuts.focus()
            break
        default:
    }
}