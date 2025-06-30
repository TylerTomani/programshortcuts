const sideBarBtn = document.querySelector('#sideBarBtn')
const sideBar = document.querySelector('.side-bar')
const sideBarUlContainer = document.querySelector('.side-bar-ul-container')
const listItemsSideBar = document.querySelectorAll('.side-bar-content > .side-bar > ul > li a')
let iItemIndex = 0
function toggleSideBar(){
    sideBar.classList.toggle('active')
}
toggleSideBar()
if(sideBarBtn && sideBar){
    [sideBarBtn,sideBar,sideBarUlContainer].forEach(el => {
        el.addEventListener('click', e => {
            if(e.target == sideBar){
                toggleSideBar()
            }
        })
    })
    sideBarBtn.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase() 
        if(letter == 'enter' ){   
            console.log(sideBar)
            toggleSideBar()
        }
    })
    sideBarBtn.addEventListener('click', e => {
        toggleSideBar()
        
    })
    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(letter == 's'){
            if(!sideBar.classList.contains('active')){
                sideBar.classList.add('active')
            }
            if(sideBar.classList.contains('hidden')){
                sideBar.classList.remove('hidden')
            }
        }
        if(letter == 'a'){
            // if(!sideBar.classList.contains('active')){
            //     sideBar.classList.add('active')
            // }
            // if(!e.shiftKey){
            //     iItemIndex = (iItemIndex + 1 ) % listItemsSideBar.length
            // } else {
            //     iItemIndex = (iItemIndex - 1 + listItemsSideBar.length) % listItemsSideBar.length
            // }
            // listItemsSideBar[iItemIndex].focus()


        }
    })
    listItemsSideBar.forEach((el,i,arr) => {
        el.addEventListener('focus', e => {
            iItemIndex = [...arr].indexOf(e.target)

        });
    })   
    
}