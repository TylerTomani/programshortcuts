export const sideBarBtn = document.querySelector('#sideBarBtn')
const sideBar = document.querySelector('.side-bar')
const sideBarUlContainer = document.querySelector('.side-bar-ul-container')
const listItemsSideBar = document.querySelectorAll('.side-bar-content > .side-bar > ul > li a')
let iItemIndex = 0
function toggleSideBar(){
    // if(!sideBar.classList.contains('hide') && sideBar.classList.contains('active')){
    //     console.log('yes')
    //     sideBar.classList.remove('active')
    //     sideBar.classList.remove('hide')
    //     return
    // } else {

    // }
    sideBar.classList.toggle('hide')

}
function toggleActive(){
    console.log(sideBar)
    if(sideBar.classList.contains('hide')){
        sideBar.classList.remove('hide')
        sideBar.classList.add('active')
    } else {
        
        sideBar.classList.toggle('active')
    }
}
// toggleSideBar()
if(sideBarBtn && sideBar){
    [sideBar].forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            e.stopPropagation()
            if(e.currentTarget.classList.contains('side-bar')){
                toggleActive()
                return
            } else {

                // toggleSideBar()
            }
        })
    })
    sideBarBtn.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        toggleSideBar()
        // if(sideBar.classList.contains('hide') && sideBar.classList.contains('active')){
        //     sideBar.classList.remove('hide')
        //     sideBar.remove('active')
        // }
        
    })
    sideBarBtn.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase() 
        if(letter == 'enter' ){   
            toggleSideBar()
            // sideBar.classList.toggle('hide')
        }
    })

    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        console.log(sideBar)
    })

    
}