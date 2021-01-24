let header = document.querySelector(".page-header");
let logo = document.querySelector(".main-nav__logo-link");
let menuButton = document.querySelector(".main-nav__menu-button");
let menuList = document.querySelector(".main-nav__list");
let authorizationButton = document.querySelector(".main-nav__button");
let contacts = document.querySelector(".main-nav__contact-list");
let socialList = document.querySelector(".main-nav__social-list");
let logoBox = document.querySelector(".main-nav__logo-box");

header.classList.remove("page-header--no-js")
logo.classList.remove("main-nav__logo-link--no-js")
menuButton.classList.remove("main-nav__menu-button--no-js")
menuList.classList.remove("main-nav__list--no-js")
authorizationButton.classList.remove("main-nav__button--no-js")
contacts.classList.remove("main-nav__contact-list--no-js")
socialList.classList.remove("main-nav__social-list--no-js")
logoBox.classList.remove("main-nav__logo-box--no-js")

menuButton.addEventListener("click", function (event) {
  header.classList.toggle("page-header--closed")
  header.classList.toggle("page-header--opened")
  logo.classList.toggle("main-nav__logo-link--closed")
  logo.classList.toggle("main-nav__logo-link--opened")
  menuButton.classList.toggle("main-nav__menu-button--closed")
  menuButton.classList.toggle("main-nav__menu-button--opened")
  menuList.classList.toggle("main-nav__list--closed")
  menuList.classList.toggle("main-nav__list--opened")
  authorizationButton.classList.toggle("main-nav__button--closed")
  authorizationButton.classList.toggle("main-nav__button--opened")
  contacts.classList.toggle("main-nav__contact-list--closed")
  contacts.classList.toggle("main-nav__contact-list--opened")
  socialList.classList.toggle("main-nav__social-list--closed")
  socialList.classList.toggle("main-nav__social-list--opened")
})

let countryBox = document.querySelector(".country-choice")
let addCountry = document.querySelector(".route__input--choose-button")

addCountry.addEventListener("click", function () {
  countryBox.classList.toggle("country-choice--closed")
  countryBox.classList.toggle("country-choice--opened")
})

let filterSection = document.querySelector(".country-filter");
let filterButton = document.querySelector(".country-filter__filter-button");
let filterMenu = document.querySelector(".country-filter__list");
let buttonMenuClosed = document.querySelector(".country-filter__button");
let formBox = document.querySelector(".form-box");
let showAllButton = document.querySelector(".country-filter__world-button--show-all");
let countryTable = document.querySelector(".country-filter__item--closed");
let showButtonWord = document.querySelector(".country-filter__button-word--show");
let collapseButtonWord = document.querySelector(".country-filter__button-word--collapse");

filterButton.addEventListener("click", function(event) {
  filterSection.classList.toggle('country-filter--closed')
  filterSection.classList.toggle('country-filter--opened')
  filterMenu.classList.toggle('country-filter__list--closed')
  filterMenu.classList.toggle('country-filter__list--opened')
  buttonMenuClosed.classList.toggle('country-filter__button--closed')
  buttonMenuClosed.classList.toggle('country-filter__button--opened')
  formBox.classList.toggle('form-box--filter-closed')
  formBox.classList.toggle('form-box--filter-opened')
  countryTable.classList.toggle ('country-filter__item--closed')
  countryTable.classList.toggle ('country-filter__item--opened')
  showAllButton.classList.toggle ('country-filter__world-button--opened');
  showAllButton.classList.toggle ('country-filter__world-button--closed');
})



buttonMenuClosed.addEventListener("click", function(event) {
  filterSection.classList.toggle('country-filter--closed')
  filterSection.classList.toggle('country-filter--opened')
  filterMenu.classList.toggle('country-filter__list--closed')
  filterMenu.classList.toggle('country-filter__list--opened')
  buttonMenuClosed.classList.toggle('country-filter__button--closed')
  buttonMenuClosed.classList.toggle('country-filter__button--opened')
  formBox.classList.toggle('form-box--filter-closed')
  formBox.classList.toggle('form-box--filter-opened')
  countryTable.classList.toggle ('country-filter__item--closed')
  countryTable.classList.toggle ('country-filter__item--opened')
  showButtonWord.classList.toggle ('country-filter__button-word--closed')
  showButtonWord.classList.toggle ('country-filter__button-word--opened')
  collapseButtonWord.classList.toggle ('country-filter__button-word--opened')
  collapseButtonWord.classList.toggle ('country-filter__button-word--closed')
  showAllButton.classList.toggle ('country-filter__world-button--opened');
  showAllButton.classList.toggle ('country-filter__world-button--closed');
})

showAllButton.addEventListener("click", function(event) {
  filterSection.classList.toggle('country-filter--closed')
  filterSection.classList.toggle('country-filter--opened')
  filterMenu.classList.toggle('country-filter__list--closed')
  filterMenu.classList.toggle('country-filter__list--opened')
  buttonMenuClosed.classList.toggle('country-filter__button--closed')
  buttonMenuClosed.classList.toggle('country-filter__button--opened')
  formBox.classList.toggle('form-box--filter-closed')
  formBox.classList.toggle('form-box--filter-opened')
  countryTable.classList.toggle ('country-filter__item--closed')
  countryTable.classList.toggle ('country-filter__item--opened')
  showButtonWord.classList.toggle ('country-filter__button-word--closed')
  showButtonWord.classList.toggle ('country-filter__button-word--opened')
  collapseButtonWord.classList.toggle ('country-filter__button-word--opened')
  collapseButtonWord.classList.toggle ('country-filter__button-word--closed')
  showAllButton.classList.toggle ('country-filter__world-button--opened');
  showAllButton.classList.toggle ('country-filter__world-button--closed');
})

let hobbyButton = document.querySelector('.partners-filter__title--hobby');
let musicButton = document.querySelector('.partners-filter__title--music');
let foodButton = document.querySelector('.partners-filter__title--food');
let transportButton = document.querySelector('.partners-filter__title--transport');
let levelButton = document.querySelector('.partners-filter__title--level');

let hobbyList = document.querySelector('.partners-filter__check-list--hobby');
let musicList = document.querySelector('.partners-filter__check-list--music');
let foodList = document.querySelector('.partners-filter__check-list--food');
let transportList = document.querySelector('.partners-filter__check-list--transport');
let levelBar = document.querySelector('.partners-filter__level-box');

hobbyButton.addEventListener('click', function () {
  hobbyList.classList.toggle('partners-filter__check-list--closed')
  hobbyList.classList.toggle('partners-filter__check-list--opened')
})

musicButton.addEventListener('click', function () {
  musicList.classList.toggle('partners-filter__check-list--closed')
  musicList.classList.toggle('partners-filter__check-list--opened')
})

foodButton.addEventListener('click', function () {
  foodList.classList.toggle('partners-filter__check-list--closed')
  foodList.classList.toggle('partners-filter__check-list--opened')
})

transportButton.addEventListener('click', function () {
  transportList.classList.toggle('partners-filter__check-list--closed')
  transportList.classList.toggle('partners-filter__check-list--opened')
})

levelButton.addEventListener('click', function () {
  levelBar.classList.toggle('partners-filter__level-box--closed')
  levelBar.classList.toggle('partners-filter__level-box--opened')
})
