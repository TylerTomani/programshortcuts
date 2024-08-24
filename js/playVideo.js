const shortcutTxts = document.querySelectorAll('.shortcut-txt')
const videos = document.querySelectorAll('.shortcut-container > .shortcut-vid > video')
let playing = false
function denlargeAllVideos(){
    videos.forEach(el => {
        el.classList.remove('animateVid')
        el.pause()
    })
}
shortcutTxts.forEach(el => {
    el.addEventListener('click', e => {
        // console.log(e.target)
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode

        if(key == 13){
            toggleVideoSize(e)
        }
        
        handleVideo(e,key)
        
        
    })
})
function getShortcutContainer(parent){
    if(parent.classList.contains('shortcut-container')){
        return parent
    } else if(parent.parentElement){
        return getShortcutContainer(parent.parentElement)
    } else {
        return null
    }
}

function toggleVideoSize(e){
    const shortcutContainer = getShortcutContainer(e.target.parentElement)
    const video = shortcutContainer.querySelector('.shortcut-vid> video')
    if(!video.classList.contains('animateVid')){
        denlargeAllVideos()
        shortcutContainer.scrollIntoView({behavior: 'smooth', block: 'center'})
        video.classList.add('animateVid')
        if(video.paused){
            video.play()
        }
    } else {
        video.classList.remove('animateVid')
    }
}
function handleVideo(e,key){   
    const shortcutContainer = getShortcutContainer(e.target.parentElement)
    const video = shortcutContainer.querySelector('.shortcut-vid> video')
    if(key == 32){
        e.preventDefault()
        if(video.paused){
            shortcutContainer.scrollIntoView({behavior: 'smooth', block : 'center'})
            denlargeAllVideos()
            video.play()
            if(!video.classList.contains('animateVid')){
                video.classList.add('animateVid')
            }
        } else {
            video.pause()
        }
    }
    if(key == 37){
        video.currentTime = video.currentTime - 2
    } 
    if(key == 39){
        e.preventDefault()
        console.log(video.duration)
        if(video.currentTime < video.duration){
            video.currentTime = video.currentTime + 2
        }
        else {
        }
    } 

}


