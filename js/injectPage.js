const pages = document.querySelectorAll('.side-bar ul li a')
const mainLandingPage = document.querySelector('.main-landing-page')
pages.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        // e.stopPropagation()
        console.log(e.target)
        fetchHref(e.target.href)
    })
})

function fetchHref(href){
    fetch(href)
        .then(response => response.text())
        .then(html => {
            mainLandingPage.innerHTML = html
        })
        .catch(error => console.log('Error fetching content:', error))
}
function fetchLessonHref(href) {
    fetch(href)
        .then(response => response.text())
        .then(html => {
            mainTargetDiv.innerHTML = html
            // add functions here
        })
        .catch(error => console.log('Error fetching content:', error))
}