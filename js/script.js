let body = document.querySelector('.js-body');
let userNavigation = document.querySelector('.js-user-nav');
let searchOpen = userNavigation.querySelector('.js-search-open');
let searchForm = userNavigation.querySelector('.js-search-form');
let searchFormInput = searchForm.querySelector('.js-search-form__input');
let enterOpen = userNavigation.querySelector('.js-enter-open');
let enterForm = userNavigation.querySelector('.js-enter-form');
let enterFormUserEmail = userNavigation.querySelector('.js-enter-form__email');

let slider = document.querySelector('.js-slider');
let sliderItem = slider.querySelectorAll('.js-slider-item');
let sliderToggle = slider.querySelectorAll('.js-slider-toggle');
let popup = document.querySelector('.js-popup');
let overlay = document.querySelector('.js-overlay');
let popupOpen = document.querySelector('.js-popup-open');
let popupClose = popup.querySelector('.js-popup-close');
let feedbackForm = popup.querySelector('.js-feedback-form');
let feedbackFormUserName = popup.querySelector('.js-feedback-form__user-name');
let feedbackFormUserEmail = popup.querySelector('.js-feedback-form__user-email');
let feedbackFormUserMessage = popup.querySelector('.js-feedback-form__user-message');

// ######

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

// ######

try {
  storageName = localStorage.getItem('userName');
} catch (err) {
  isStorageSupport = false;
}

try {
  storageEmail = localStorage.getItem('userEmail');
} catch (err) {
  isStorageSupport = false;
}

// ######

popupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!popup.classList.contains('popup--active')) {
    popup.classList.add('popup--active');
    overlay.classList.add('overlay--active');
    feedbackFormUserName.focus();
  };

  if (storageName && !storageEmail) {
    feedbackFormUserName.value = storageName;
    userEmail.focus();
  } else if (storageName && storageEmail) {
    feedbackFormUserName.value = storageName;
    userEmail.value = storageEmail;
    feedbackFormUserMessage.focus();
  } else {
    feedbackFormUserName.focus();
  };
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackFormUserName.value || !feedbackFormUserEmail.value || !feedbackFormUserMessage.value) {
    evt.preventDefault();
    popup.classList.remove('popup--error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('popup--error');
  } else if (isStorageSupport) {
    localStorage.setItem('userName', feedbackFormUserName.value);
    localStorage.setItem('userEmail', userEmail.value);
  }
});

popupClose.addEventListener('click', function () {
  if (popup.classList.contains('popup--active')) {
    popup.classList.remove('popup--active');
    popup.classList.remove('popup--error');
    overlay.classList.remove('overlay--active');
  };
});

overlay.addEventListener('click', function () {
  if (overlay.classList.contains('overlay--active')) {
    popup.classList.remove('popup--active');
    popup.classList.remove('popup--error');
    overlay.classList.remove('overlay--active');
  }
});

window.addEventListener('keydown', function () {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('popup--active')) {
      popup.classList.remove('popup--active');
      popup.classList.remove('popup--error');
      overlay.classList.remove('overlay--active');
    }
  }
});

searchOpen.addEventListener('click', function () {
  searchForm.classList.toggle('search-form--active');
});

searchForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  alert('Ищу ' + searchFormInput.value);
  if (!searchFormInput.value) {
    searchForm.classList.remove('popup--error');
    searchForm.offsetWidth = popup.offsetWidth;
    searchForm.classList.add('popup--error');
  };
});

enterOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  enterForm.classList.toggle('enter-form--active');
  enterFormUserEmail.focus();
  if (storageEmail) {
    enterFormUserEmail.value = storageEmail;
    enterFormUserPassword.focus();
  } else {
    enterFormUserEmail.focus();
  };
});


enterForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  if (!enterFormUserEmail.value) {
    enterForm.classList.remove('popup--error');
    enterForm.offsetWidth = enterForm.offsetWidth;
    enterForm.classList.add('popup--error');
  } else if (isStorageSupport) {
    localStorage.setItem('userEmail', enterFormUserEmail.value);
  };
});

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
