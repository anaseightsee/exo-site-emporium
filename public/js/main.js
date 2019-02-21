
const nav = document.getElementById('navigation');
const navTop = nav.offsetTop;

// THEME CHANGE START
let logo = document.getElementById('logo');
let activeNavbar = document.getElementsByClassName('active')[0];
let header = document.getElementsByTagName('header')[0];
let blckBtn = document.getElementsByClassName('dark')[0];
let whtBtn = document.getElementsByClassName('light')[0];
let body = document.getElementsByTagName('body')[0]

function darkTheme(){
    if (blckBtn) {
        body.style.backgroundColor = '#212121'
        header.classList.remove('bg-light')
        header.classList.add('bg-dark')
        logo.classList.add('text-light')
        logo.classList.remove('text-dark')
        activeNavbar.classList.add('text-light')
        activeNavbar.classList.remove('text-dark')
        nav.classList.remove('navbar-light')
        nav.classList.add('navbar-dark')
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

function darkText(){
    let textThemeChange = document.querySelectorAll('.textColor')
    for (i = 0; i < textThemeChange.length; i++){
        textThemeChange[i].classList.add('text-light')
        textThemeChange[i].classList.remove('text-dark')
    }
}

blckBtn.addEventListener('click', darkText)

function lightTheme(){
    if (whtBtn) {
        body.style.backgroundColor = 'white'
        header.classList.add('bg-light')
        header.classList.remove('bg-dark')
        logo.classList.add('text-dark')
        logo.classList.remove('text-light')
        activeNavbar.classList.add('text-dark')
        activeNavbar.classList.remove('text-light')
        nav.classList.remove('navbar-dark')
        nav.classList.add('navbar-light')
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

function lightText(){
    let textThemeChange = document.querySelectorAll('.textColor')
    for (i = 0; i < textThemeChange.length; i++){
        textThemeChange[i].classList.remove('text-light')
        textThemeChange[i].classList.add('text-dark')
    }
}

whtBtn.addEventListener('click', lightText)

// THEME CHANGE END

// STICKY NAVBAR START

    // elements grabbed in the top lines

function stickyNavigation() {
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
}
    
function stickyNavigation() {
    if (window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
        // logo.style.display = ''
        logo.classList.add('float-left')
    } else {
        // document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
        logo.classList.remove('float-left')
    }
  }

window.addEventListener('scroll', stickyNavigation);

// STICKY NAVBAR END

// CONNECTION START

let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let signup = document.getElementsByClassName('signUp')[0]
let signin = document.getElementsByClassName('signIn')[0];
let clickHere = document.getElementsByClassName('clickHere')[0];

signup.style.display = 'none'

function clickToSignUp(event){
    if(clickHere){
        signin.style.display = 'none'
        signup.style.display = ''
        event.preventDefault()
    } else {
        signin.style.display = ''
        signup.style.display = 'none'
    }
}

clickHere.addEventListener('click', clickToSignUp)

// CONNECTION END

// CAROUSEL START

let slideDiv = document.getElementsByClassName('slide')[0]
let btnCarousel = document.querySelectorAll('#section4 a')


function slide(event) {
    let pos = event.currentTarget.dataset.position;
    slideDiv.style.transform = 'translateX(' + -13 * pos + '%)'
    slideDiv.style.transition = 'all 1s ease'
    event.preventDefault()
}

btnCarousel[0].addEventListener('click', slide)
btnCarousel[1].addEventListener('click', slide)
btnCarousel[2].addEventListener('click', slide)
btnCarousel[3].addEventListener('click', slide)

// CAROUSEL END