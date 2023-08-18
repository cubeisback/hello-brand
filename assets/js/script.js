   
//scroll header
let scrollpos = window.scrollY
const header = document.querySelector("header")
const scrollChange = 1;
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) { header.classList.add("fixed") }
  else { header.classList.remove("fixed")}
});

//header mob menu
document.querySelector('.header_burger').addEventListener('click', function() {
  this.classList.toggle('opened')
  document.querySelector('.header_menu__block').classList.toggle('active')
  document.querySelector('body').classList.toggle('fixed')
});

//modal window
let promo_btn = document.querySelector('.promo_btn__reserve')
promo_btn.addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('body').classList.add('fixed')
    document.querySelector('.modal').classList.add('active')
});

//first slider
const sliderReviews = new Swiper('.reviews_slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//second slider
const sliderGallery = new Swiper('.gallery_slider', {
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30
    }
}
});

//form subbmit
function send(e,form) {
  fetch(form.action, {
    method: "POST", 
    mode: "no-cors", 
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: new URLSearchParams(new FormData(form))
  }).then(
    document.querySelector('body').classList.add('fixed'),
    document.getElementById('thanks').classList.add('active'),
    document.querySelector('.modal').classList.remove('active'),
    form.reset()
	);
  e.preventDefault();
}

//close btn
let close_btn = document.querySelectorAll(".close_btn");
close_btn.forEach(close => {
  close.addEventListener('click', function() {
      document.querySelector('body').classList.remove('fixed')
      document.getElementById('thanks').classList.remove('active')
      document.querySelector('.modal').classList.remove('active')
  })
});