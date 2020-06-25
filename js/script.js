const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const popupOpen = document.querySelector('.contacts__popup-btn');
const popupClose = document.querySelector('.popup__close');

popupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--active');
  overlay.classList.add('overlay--active');
});

popupClose.addEventListener('click', function () {
  popup.classList.remove('popup--active');
  overlay.classList.remove('overlay--active');
});

overlay.addEventListener('click', function () {
  popup.classList.remove('popup--active');
  overlay.classList.remove('overlay--active');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup--active")) {
      evt.preventDefault();
      popup.classList.remove("popup--active");
      overlay.classList.remove("overlay--active");
    }
  }
});
