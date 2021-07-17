// Create variables targeting the relevant DOM elements here 👇
//Buttons variables
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view')
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section');
var createNewBookButton = document.querySelector('.create-new-book-button');
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');
//View home-view elements/ main cover
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var mainCover = document.querySelector('.main-cover')




var savedCovers = [];

var currentCover;



// Add your event listeners here 👇
randomCoverButton.addEventListener('click', assignCover);

makeNewButton.addEventListener('click', showMakeCover);

viewSavedButton.addEventListener('click', showSavedCover);

homeButton.addEventListener('click', showHome);

createNewBookButton.addEventListener('click', makeMyBook);

saveCoverButton.addEventListener('click', saveCover);

savedView.addEventListener('dblclick', deleteCover);

// Create your event handlers and other functions here 👇

function deleteCover(event) {
  var idElement = event.target.parentNode.id;
  // console.log(idElement);
  // console.log(savedCovers[0].id)
  // console.log(savedCovers[0].id == idElement)
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == idElement) {
      //console.log('test')
      savedCovers.splice(i, 1);
    };
  };
  console.log(savedCovers);
  showSavedCover();

};
assignCover();

function saveCover(event) {
  event.preventDefault();
  if(!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  };
};

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
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function showSavedCover(){
  savedCoversSection.innerHTML = "";
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');  
  for(var i = 0; i < savedCovers.length; i++) {
      savedCoversSection.innerHTML += `
  <section class="mini-cover" id="${savedCovers[i].id}">
    <img class="mini-cover" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  </section>
  `;
   }; 
};

function showHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');

};

function makeMyBook(event) {
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
