const section = document.querySelectorAll(".section")

const options = {
    rootMargin:"0px 0px 0px 60000px", // Negative rootmargin srinks the viewport . Positive rootmargin increases the viewport
}

const observer = new IntersectionObserver ((entries,observe) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.classList.remove('invisible')
        }

        if (!entry.isIntersecting) {
            entry.target.classList.add('invisible')
            entry.target.classList.remove('visible')
        }
    })
},options)

section.forEach((entry) => {
    observer.observe(entry)
})


const searchSection = document.querySelector('.search-section')
const searchBtn = document.querySelector('.search-btn')
const closeBtn = document.querySelector('.close-btn')

function openSearchBar () {
    searchSection.classList.add('active');
    searchBtn.style.display = "none"
    closeBtn.style.display = "block"
}

function closeSearchBar () {
    searchSection.classList.remove('active');
    searchBtn.style.display = "block"
    closeBtn.style.display = "none"
}

searchBtn.addEventListener('click',openSearchBar)
closeBtn.addEventListener('click',closeSearchBar)


const menuIcon = document.querySelector('.fa-bars')
const navBar = document.querySelector('.aside-nav-bar')

function menuIconActionHandaler () {
    menuIcon.classList.toggle('fa-bars-open')
    navBar.classList.toggle('nav-btn')
}

menuIcon.addEventListener('click',menuIconActionHandaler)