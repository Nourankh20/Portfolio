/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns  = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb,i) =>{
    mb.addEventListener('click', ()=>{
        modal(i)
    })
} )

modalClose.forEach((mc)=>{
    mc.addEventListener('click', ()=>{
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        } )
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'

const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark':'light'
const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : "bx bx-sun"


if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}
  themeButton.addEventListener('click', () =>{
      document.body.classList.toggle(lightTheme)
      themeButton.classList.toggle(iconTheme)
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())

  })
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset:true
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal(`.home__social , .home__scroll`, {delay: 700, origin:'buttom'})
