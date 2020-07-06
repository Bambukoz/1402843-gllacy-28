let userNavigation = document.querySelector('.js-user-nav');
let popup = document.querySelector('.js-popup');
let slider = document.querySelector('.js-slider');
let subscribe = document.querySelector('.js-subscribe');
let filter = document.querySelector('.js-filter');
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

if (userNavigation) {
  let searchOpen = userNavigation.querySelector('.js-search-open');
  let searchForm = userNavigation.querySelector('.js-search-form');
  let searchFormInput = searchForm.querySelector('.js-search-form__input');
  let enterOpen = userNavigation.querySelector('.js-enter-open');
  let enterForm = userNavigation.querySelector('.js-enter-form');
  let enterFormUserEmail = userNavigation.querySelector('.js-enter-form__email');
  let enterFormUserPassword = userNavigation.querySelector('.js-enter-form__password');
  let basketOpen = userNavigation.querySelector('.js-basket-open');
  let basketForm = userNavigation.querySelector('.js-basket-form');

  searchOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle('search-form--active');
    if (searchForm.classList.contains('search-form--active')) {
      enterForm.classList.remove('enter-form--active');
      basketForm.classList.remove('basket-form--active');
    };
  });

  searchForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    alert('Ищу ' + searchFormInput.value);
  });

  enterOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    enterForm.classList.toggle('enter-form--active');
    if (enterForm.classList.contains('enter-form--active')) {
      searchForm.classList.remove('search-form--active');
      basketForm.classList.remove('basket-form--active');
    };

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
    alert('Авторизация прошла успешно');
    if (isStorageSupport) {
      localStorage.setItem('userEmail', enterFormUserEmail.value);
    };
  });

  if (basketOpen.classList.contains('user-nav__btn--basket-active')) {
    basketOpen.addEventListener('click', function (evt) {
      evt.preventDefault();
      basketForm.classList.toggle('basket-form--active');
      searchForm.classList.remove('search-form--active');
      enterForm.classList.remove('enter-form--active');
    });

    basketForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      alert('Заказ оформлен!');
    });

  } else {
    basketOpen.addEventListener('click', function (evt) {
      evt.preventDefault();
      searchForm.classList.remove('search-form--active');
      enterForm.classList.remove('enter-form--active');
    });
  };

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (searchForm.classList.contains('search-form--active')) {
        searchForm.classList.remove('search-form--active');
      };
      if (enterForm.classList.contains('enter-form--active')) {
        enterForm.classList.remove('enter-form--active');
      };
      if (basketForm.classList.contains('basket-form--active')) {
        basketForm.classList.remove('basket-form--active');
      }
    };
  });
};

if (subscribe) {
  let subscribeInput = subscribe.querySelector('.js-subscribe__input');

  if (storageEmail) {
    subscribeInput.value = storageEmail;
  };
  if (isStorageSupport) {
    localStorage.setItem('userEmail', subscribeInput.value);
  };

  subscribe.addEventListener('submit', function (evt) {
    evt.preventDefault();
    alert('Теперь ваш email: ' + subscribeInput.value + ' во всех СПАМ-листах 😈');
  });
};

if (popup) {
  let overlay = document.querySelector('.js-overlay');
  let popupOpen = document.querySelector('.js-popup-open');
  let popupClose = popup.querySelector('.js-popup-close');
  let feedbackForm = popup.querySelector('.js-feedback-form');
  let userName = popup.querySelector('.js-feedback-form__user-name');
  let userEmail = popup.querySelector('.js-feedback-form__user-email');
  let userMessage = popup.querySelector('.js-feedback-form__user-message');

  popupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (!popup.classList.contains('popup--active')) {
      popup.classList.add('popup--active');
      overlay.classList.add('overlay--active');
      userName.focus();
    };

    if (storageName && !storageEmail) {
      userName.value = storageName;
      userEmail.focus();
    } else if (storageName && storageEmail) {
      userName.value = storageName;
      userEmail.value = storageEmail;
      userMessage.focus();
    } else {
      userName.focus();
    };
  });

  feedbackForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!userName.value || !userEmail.value || !userMessage.value) {
      evt.preventDefault();
      popup.classList.remove('popup--error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('popup--error');
    } else {
      alert(userName.value + ' успешно ввел: ' + userEmail.value + ' и написал: ' + userMessage.value);
    };
    if (isStorageSupport) {
      localStorage.setItem('userName', userName.value);
      localStorage.setItem('userEmail', userEmail.value);
    };
  });

  popupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (popup.classList.contains('popup--active')) {
      popup.classList.remove('popup--active');
      popup.classList.remove('popup--error');
      overlay.classList.remove('overlay--active');
    };
  });

  overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (overlay.classList.contains('overlay--active')) {
      popup.classList.remove('popup--active');
      popup.classList.remove('popup--error');
      overlay.classList.remove('overlay--active');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains('popup--active')) {
        popup.classList.remove('popup--active');
        popup.classList.remove('popup--error');
        overlay.classList.remove('overlay--active');
      };
    };
  });
};

if (filter) {
  filter.addEventListener('submit', function (evt) {
    evt.preventDefault();
    alert('Фильтрую список');
  });
};

if (slider) {
  let body = document.querySelector('.js-body');
  let sliderItem = slider.querySelectorAll('.js-slider-item');
  let sliderToggle = slider.querySelectorAll('.js-slider-toggle');

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
      body.style.backgroundColor = 'var(--slider-2)';
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
      body.style.backgroundColor = 'var(--slider-3)';
    };
  });
};
