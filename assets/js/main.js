/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0;i < skillsContent.length;i++){
        skillsContent[i].className = 'skills-content skills-close'
    }

    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const qualifContent = document.getElementsByClassName('qualification-content'),
      qualifTab = document.querySelectorAll('.qualification-tab')

function toggleQualif(){
    let itemClass = this.parentNode.className

    for(i = 0;i < qualifContent.length;i++){
        qualifContent[i].className = 'qualification-content qualification-close'
    }

    if(itemClass === 'qualification-content qualification-close'){
        this.parentNode.className = 'qualification-content qualification-open'
    }
}

qualifTab.forEach((el)=>{
    el.addEventListener('click',toggleQualif)
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services-modal'),
modalBtns = document.querySelectorAll('.services-button'),
modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPorfolio = new Swiper('.portfolio-container', {
    cssMode: true,
    loop:true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial-container', {
    loop:true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints:{
        568:{
            slidesPerview:2,
        }
    }
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 