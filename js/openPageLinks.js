export function openPageLinks(){
    const aLinks =document.querySelectorAll('a')
    aLinks.forEach(el => {

        if(el.hasAttribute('target')){
            el.addEventListener('click', e => {
                window.open(e.target.href)
            })
        }
    })
    
}