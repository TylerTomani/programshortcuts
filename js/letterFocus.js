const macEssentialShortcuts = document.getElementById('macEssentialShortcuts')
const tbd = document.getElementById('tbd')
const mainSearchQuery = document.querySelector('#mainSearch > .search-query > input')
const asideSearchQuery = document.querySelector('#asideSearch > .search-query > input')
const youtubeEssentialShortcuts = document.getElementById('youtubeEssentialShortcuts')
const playlistsTitle = document.getElementById('playlistsTitle')
const videosTitle = document.getElementById('videosTitle')

const homeAside = document.getElementById('homeAside')
const videosAside = document.getElementById('videosAside')
const playListAside = document.getElementById('playListAside')

let asideFocused  = false
let focusSearchQuery = false 
export const showAsideBtn = document.getElementById('showAsideBtn')
import { toggleAsideBtn } from "./showAside.js"
import { asideMenu } from "./showAside.js"
import { asideBtn } from "./showAside.js"

asideMenu.addEventListener('focusin', e => {asideFocused = true})
asideMenu.addEventListener('focusout', e => {asideFocused = false})
mainSearchQuery.addEventListener('focusin', e => { focusSearchQuery = true})
mainSearchQuery.addEventListener('focusout', e => {focusSearchQuery = false})
asideSearchQuery.addEventListener('focusin', e => { focusSearchQuery = true})
asideSearchQuery.addEventListener('focusout', e => {focusSearchQuery = false})


import { toggleAside } from "./showAside.js"

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
            toggleAside()
            asideBtn.focus()
            break
        case 'h':
            mainSearchQuery.focus()
            break
        case 'm':
            macEssentialShortcuts.focus()
            break
        case 'p':
            playlistsTitle.focus()
            break
        case 's': 
            mainSearchQuery.focus()
            break
        case 't': 
            tbd.focus()
            break
        case 'v': 
            videosTitle.focus()
            break
        case 'y': 
            youtubeEssentialShortcuts.focus()
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
            playListAside.focus()
            break
        case 's': 
            asideSearchQuery.focus()
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