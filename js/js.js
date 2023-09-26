/*Menu show */

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuMobileheader = document.querySelector('header');
    let logos = document.querySelector(".logo");
    let logoss = document.querySelector(".logo img");

    if (menuMobile.classList.contains('open')) {
        menuMobileheader.classList.remove("fund");

        menuMobile.classList.remove('open');
        logos.classList.remove('open');
        logoss.classList.remove('open');

        document.querySelector('.icon').src = "img/menu_.png";
    } else {
        menuMobile.classList.add('open');
        logos.classList.add('open');
        logoss.classList.add('open');

        menuMobileheader.classList.add("fund");
        document.querySelector('.icon').src = "img/close_.png";
    }
}

//Scroll cor e logo
window.addEventListener("scroll", function() {
    var logo = document.querySelector(".logo img");
    var logot = document.querySelector(".logo");
    var redes = document.querySelector(".redes");

    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        logo.classList.add("scrolled");
        logot.classList.add("scrolled");
        redes.classList.add("scrolled");
    } else {
        logo.classList.remove("scrolled");
        logot.classList.remove("scrolled");
        redes.classList.remove("scrolled");
    }
});

/* SLIDE */
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

