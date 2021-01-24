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
