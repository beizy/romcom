// Create variables targeting the relevant DOM elements here 👇
//Buttons variables
var hiddenHomeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoverButton = document.querySelector('.view-saved-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var form = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section');
var makeMyBookButton = document.querySelector('.create-new-book-button');
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');
//View home-view elements/ main cover
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var mainCoverView = document.querySelector('.main-cover')

// We've provided a few variables below
// var savedCovers = [
//   new Cover(covers[4], titles[3], tagline1[7], tagline2[1]), new Cover(covers[1], titles[5], tagline1[6], tagline2[2])
// ];

var currentCover;



// Add your event listeners here 👇
randomCoverButton.addEventListener('click', assignCover);

makeYourOwnCoverButton.addEventListener('click', showMakeCover);

viewSavedCoverButton.addEventListener('click', showSavedCover);

hiddenHomeButton.addEventListener('click', showHome);

makeMyBookButton.addEventListener('click', makeMyBook);

// Create your event handlers and other functions here 👇

assignCover();

function assignCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  coverImage.src = randomCover; 
  coverTitle.innerText = randomTitle;
  tagline1.innerText = randomDescriptor1;
  tagline2.innerText = randomDescriptor2;
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
};

function showMakeCover(){
  mainCoverView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  hiddenHomeButton.classList.remove('hidden');
  form.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
}

function showSavedCover(){
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  hiddenHomeButton.classList.remove('hidden');
  savedCoversView.classList.remove('hidden');
  savedCoversView.classList.add('mini-cover');
  form.classList.add('hidden');
  mainCoverView.classList.add('hidden');
};

function showHome() {
  hiddenHomeButton.classList.add('hidden');
  mainCoverView.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  form.classList.add('hidden');
};

function makeMyBook() {
  event.preventDefault();
  covers.unshift(userCover.value);
  titles.unshift(userTitle.value);
  descriptors.unshift(userDesc1.value);
  descriptors.unshift(userDesc2.value);
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
  showHome();
  coverImage.src = currentCover.cover; 
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
};

//We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
