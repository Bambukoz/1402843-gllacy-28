const popup = document.querySelector('.js-popup');
const overlay = document.querySelector('.js-overlay');
const popupOpen = document.querySelector('.js-popup-open');
const popupClose = document.querySelector('.js-popup-close');

const searchInput = document.querySelector('.js-search');
const enterBtn = document.querySelector('.js-enter');

const body = document.querySelector('.js-body');
const slider = document.querySelector('.js-slider');
const sliderItem = slider.querySelectorAll('.js-slider-item');
const sliderToggle = slider.querySelectorAll('.js-slider-toggle');

// ######

popupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!popup.classList.contains('popup--active')) {
    popup.classList.add('popup--active');
    overlay.classList.add('overlay--active');
  }
});

popupClose.addEventListener('click', function () {
  if (popup.classList.contains('popup--active')) {
    popup.classList.remove('popup--active');
    overlay.classList.remove('overlay--active');
  };
});

overlay.addEventListener('click', function () {
  if (overlay.classList.contains('overlay--active')) {
    popup.classList.remove('popup--active');
    overlay.classList.remove('overlay--active');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup--active")) {
      popup.classList.remove("popup--active");
      overlay.classList.remove("overlay--active");
    }
  }
});

// ######

// searchInput.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 13) {
//     evt.preventDefault();
//     console.log('Форма отправлена!')
//   };
// });

// #######

sliderToggle[0].addEventListener('click', function () {
  if (!sliderToggle[0].classList.contains('slider__toggle--active') && !sliderItem[0].classList.contains('slider__item--active')) {
    sliderToggle[1].classList.toggle('slider__toggle--active', false);
    sliderItem[1].classList.toggle('slider__item--active', false);
    sliderToggle[2].classList.toggle('slider__toggle--active', false);
    sliderItem[2].classList.toggle('slider__item--active', false);
    sliderToggle[0].classList.add('slider__toggle--active');
    sliderItem[0].classList.add('slider__item--active');
    body.style.backgroundColor = '';
  };
});

sliderToggle[1].addEventListener('click', function () {
  if (!sliderToggle[1].classList.contains('slider__toggle--active') && !sliderItem[1].classList.contains('slider__item--active')) {
    sliderToggle[0].classList.toggle('slider__toggle--active', false);
    sliderItem[0].classList.toggle('slider__item--active', false);
    sliderToggle[2].classList.toggle('slider__toggle--active', false);
    sliderItem[2].classList.toggle('slider__item--active', false);
    sliderToggle[1].classList.add('slider__toggle--active');
    sliderItem[1].classList.add('slider__item--active');
    body.style.backgroundColor = '#8996A6';
  };
});

sliderToggle[2].addEventListener('click', function () {
  if (!sliderToggle[2].classList.contains('slider__toggle--active') && !sliderItem[2].classList.contains('slider__item--active')) {
    sliderToggle[0].classList.toggle('slider__toggle--active', false);
    sliderItem[0].classList.toggle('slider__item--active', false);
    sliderToggle[1].classList.toggle('slider__toggle--active', false);
    sliderItem[1].classList.toggle('slider__item--active', false);
    sliderToggle[2].classList.add('slider__toggle--active');
    sliderItem[2].classList.add('slider__item--active');
    body.style.backgroundColor = '#9D8B84';
  };
});
