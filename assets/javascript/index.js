var typed = new Typed('.dy-text', {
    strings: ["Developer", "Overflow"],
    typeSpeed: 200,
    backSpeed: 100,
    startDelay: 1500,
    backDelay: 1000,
    loop: true
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const card = document.querySelectorAll('.card');


card.forEach((links) => {
    links.addEventListener("mouseover", function( event ) {
        this.classList.add('card-hover')
        this.querySelector('.card-body').classList.add("show-link");
        this.querySelector('.img-portofolio').classList.add('blur-portofolio');
    })

    links.addEventListener("mouseout", function( event ) {
        this.classList.remove('card-hover')
        this.querySelector('.card-body').classList.remove("show-link");
        this.querySelector('.img-portofolio').classList.remove('blur-portofolio');
    })
});

// onload = function() {
//     const idLoading = document.getElementById('loading');
//     const idScreen = document.getElementById('loading-screen');
//     const content = document.getElementById('content');
//     const contenthead = document.querySelector('.head-content');
//     const contentbody = document.querySelector('.body-content');
//     const textloading = document.querySelector('.text-loading');

    
//     setTimeout(() => {
//         textloading.classList.add('show-text');
//     }, 2000)
//     setTimeout(() => {
//         idScreen.classList.add('load')
//         idLoading.style.display = "none";
//         content.style.display = "block";
//         // mengubah value property opacity css dari 0 ke 1 setelah delay 300ms
//         setTimeout(() => {
//             contenthead.style.opacity = "1";
//             contentbody.style.opacity = "1";
//         }, 300)
//     }, 4000)
// }
