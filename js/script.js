let header = document.querySelector('.header')
let burgerCheck = document.querySelector('#burger_check')
let menu = document.querySelector('.menu')
let sideMenu = document.querySelector('.side_menu')
let sideMenuCheck = document.querySelector('#side_menu')
let body = document.querySelector('body')


document.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.classList.add('fixed')
    document.querySelector('.h_logo').src = "assets/images/logo.svg"
  } else if ((window.scrollY == 0) && (! menu.classList.contains('active'))) {
    header.classList.remove('fixed')
    document.querySelector('.h_logo').src = "assets/images/logo-light.svg"
  }

})

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('nav').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset - 20;

    sideMenu.classList.remove('active')
    sideMenu.classList.add('inactive')
    body.classList.remove('freezed')
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

burgerCheck.addEventListener('click', function () {
  if (! menu.classList.contains('active')) {
    menu.classList.add('active')
    header.classList.add('fixed')
    document.querySelector('.h_logo').src = "assets/images/logo.svg"
  } else if ((window.scrollY == 0) && (menu.classList.contains('active'))) {
    menu.classList.remove('active')
    header.classList.remove('fixed')
    document.querySelector('.h_logo').src = "assets/images/logo-light.svg"
  } else if ((window.scrollY > 0) && (menu.classList.contains('active'))) {
    menu.classList.remove('active')
  }
})

sideMenuCheck.addEventListener('click', function () {
  if (!sideMenu.classList.contains('active')) {
    sideMenu.classList.remove('inactive')
    sideMenu.classList.add('active')
    body.classList.add('freezed')
  } else {
    sideMenu.classList.remove('active')
    sideMenu.classList.add('inactive')
    body.classList.remove('freezed')
  }
})

console.log(burgerCheck)

const Swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  speed: 400,

  pagination: {
    el: '.swiper2-pagination',
    clickable: true,
  },
});

const Swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 5,
      spaceBetween: 50,
    }
  },

});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 60,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
// let cardBlog = document.querySelectorAll('.blog_card');
// swiper.addEventListener('mousedown', function () {

//     cardBlog.style.cursor = 'grabbing';

// } );

let reviews = document.querySelectorAll('.review');
reviews.forEach(review => {
  review.addEventListener('mousedown', function () {
    review.style.cursor = 'grabbing'
  })
  review.addEventListener('mouseup', function () {
    review.style.cursor = 'grab'
  })
});