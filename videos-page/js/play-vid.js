// I need to get async down this is inefficent
let playing = false
export function playVids(){
    const stepTxts = document.querySelectorAll('.step-txt')
    const allVideos = document.querySelectorAll('video')
    allVideos.forEach(vid => {
        vid.loop = true;
    vid.controls = true;  // IMPORTANT
        vid.style.width = '100%'; // Optional for responsiveness
        vid.addEventListener('click', e => {
            const step = getStep(e.target)
            playing = !playing
            handleVideo(e,step)
        })
    })
    stepTxts.forEach(el => {
        el.addEventListener('click', e => {
            
        })
        el.addEventListener('keydown', e => {            
            let step = getStep(e.target.parentElement)

            stopAllVideos()
            handleVideo(e,step)
        })
    })
    function denlargeAllVideos(){
        allVideos.forEach(el => {
            if(el.classList.contains('enlarge-vid')){
                el.classList.remove('enlarge')
            }
        })
    }
    function handleVideo(e,step){
             let stepVid = step.querySelector('.step-vid')     
        const vid = stepVid.querySelector('video')

        playPauseVideo(e,vid)
    }

    function playPauseVideo(e, vid) {
        const keyCode = e.keyCode;

        switch (keyCode) {
            case 13: // Enter
                toggleVideoSize(vid);
                playing = true;
                break;
            case 32: // Space
                e.preventDefault();
                playing = !playing;
                break;
            case 37: // Left Arrow
                e.preventDefault();
                vid.currentTime -= 1;
                break;
            case 39: // Right Arrow
                e.preventDefault();
                vid.currentTime += 1;
                break;
        }

        playing ? vid.play() : vid.pause();
    }
    function toggleVideoSize(vid){
        denlargeAllVideos()
        const step = getStep(vid.parentElement)
        step.classList.toggle('relative')
        vid.classList.toggle('enlarge-vid')
        
    }

    function stopAllVideos(){
        allVideos.forEach(vid => vid.pause())

    }
    addEventListener('click', e => {
        e.preventDefault()
        if(!e.target.parentElement.classList.contains('step-vid')){
            console.log(e.target)
            denlargeAllVideos()
        }
    })
}
function getStep(parent){
    if(parent.classList.contains('step') || parent.classList.contains('step-float')){
        return parent
    } else if (parent.parentElement){
        return getStep(parent.parentElement)
    } else {
        return null
    }
}

