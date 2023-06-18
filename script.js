var typed= new Typed(".multiple-text", {
    strings:["Frontend Developer", "UI / UX DESIGNER",
    "React Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a ');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
//______________________________________________________________________
let btn = document.querySelector("button");

window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display='block';
    }else{
        btn.style.display='none';
    }
}
btn.onclick = function (){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    });
};

ScrollReveal ({
    reset : true,
    distance:"80px",
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .Services-container, .portfolio-box, .contact form , .skills ', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1,.home-img ', { origin: 'left'});
ScrollReveal().reveal('.home-content p,.about-content ', { origin: 'right'});
