const sideBarBtn = document.querySelector('#sideBarBtn')
const sideBar = document.querySelector('.side-bar')


function toggleSideBar(){
    sideBar.classList.toggle('active')
}
toggleSideBar()
[sideBarBtn, sideBar].forEach(el => {
    el.addEventListener('click', e => {
        if(e.target == sideBar){
            toggleSideBar()
        }
    })
})
sideBarBtn.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase() 
    if(letter == 'enter' ){   
        toggleSideBar()
    }
})

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'a'){
        toggleSideBar()
    }
    
    
})

