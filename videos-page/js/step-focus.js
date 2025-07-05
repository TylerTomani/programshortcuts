export function stepFocus(){
    const stepTxts = document.querySelectorAll('.step-txt')
    const body = document.querySelector('body')
    const allImages = document.querySelectorAll('img')        
    allImages.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            
            toggleImg(e)
        });
    })
    addEventListener('keydown', e => {
        let key = e.key
        let keyCode = e.keyCode
        if(keyCode === 32){
             e.preventDefault()
        }
        
        if(!isNaN(key)){
            
            // console.log(intlet)
            let intlet = parseInt(key)
            intlet -= 1
            if(stepTxts.length == 0) return
            stepTxts[intlet]?.focus()
            // stepTxts[intlet].scrollIntoView({behavior: 'smooth', block: 'center'})
        }
        if(key.toLocaleLowerCase() === 'm' && e.target.id != 'mainShorcutPageContainer'){
            // console.log(mainShorcutPageContainer)
            body.scrollTo(0, 0)
    

             
        }
    })
    stepTxts.forEach(el => {
        el.addEventListener('keydown', e => {
            toggleImg(e)
        })
    })
}
function getStep(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if (parent.parentElement){
        return getStep(parent.parentElement)
    } else {
        return null
    }
}
function toggleImg(e){
    let keyCode = e.keyCode
    console.log(e.target)
    const step = getStep(e.target.parentElement) 
    const img = step.querySelector('img')
    if(img){
        if(keyCode === 13){
            step.classList.toggle('relative')
            img.classList.toggle('enlarge-img')
        }
        if(e.target.tagName == 'IMG'){
            step.classList.toggle('relative')
            img.classList.toggle('enlarge-img')

        }
        
    }
}