
// THEME CHANGE START
let logo = document.getElementById('logo');
let activeNavbar = document.getElementsByClassName('active')[0];
let header = document.getElementsByTagName('header')[0];
let blckBtn = document.getElementsByClassName('dark')[0];
let whtBtn = document.getElementsByClassName('light')[0];
let body = document.getElementsByTagName('body')[0]

function darkTheme(){
    if (blckBtn) {
        body.style.backgroundColor = 'black'
        header.style.backgroundColor = 'black' 
        header.classList.remove('bg-light')
        logo.classList.add('text-light')
        logo.classList.remove('text-dark')
        activeNavbar.classList.add('text-light')
        activeNavbar.classList.remove('text-dark')
    }
}
blckBtn.addEventListener('click', darkTheme)

function darkInactive(){
    let inactiveNavbar = document.querySelectorAll('.inactive');
    for (i = 0; i < inactiveNavbar.length; i++ ){
        inactiveNavbar[i].classList.add('text-white-50')
        inactiveNavbar[i].classList.remove('text-secondary')
    }
}

blckBtn.addEventListener('click', darkInactive)

function lightTheme(){
    if (whtBtn) {
        body.style.backgroundColor = 'white'
        header.style.backgroundColor = 'white'
        logo.classList.add('text-dark')
        logo.classList.remove('text-light')
        activeNavbar.classList.add('text-dark')
        activeNavbar.classList.remove('text-light')
    }
}

whtBtn.addEventListener('click', lightTheme)

function lightInactive(){
    let inactiveNavbar = document.querySelectorAll('.inactive');
    for (i = 0; i < inactiveNavbar.length; i++ ){
        inactiveNavbar[i].classList.remove('text-white-50')
        inactiveNavbar[i].classList.add('text-secondary')
    }
}
whtBtn.addEventListener('click', lightInactive)

// THEME CHANGE END

// STICKY NAVBAR START
const nav = document.getElementById('navigation');
const navTop = nav.offsetTop;

function stickyNavigation() {
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
}
    
function stickyNavigation() {
    if (window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
        logo.style.display = ''
        logo.classList.add('float-left')
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
        logo.classList.remove('float-left')
    }
  }

window.addEventListener('scroll', stickyNavigation);

// STICKY NAVBAR END