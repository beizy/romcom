// Create variables targeting the relevant DOM elements here 👇
//Buttons variables
var hiddenHomeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoverButton = document.querySelector('.view-saved-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var form = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view')
//View home-view elements/ main cover
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var mainCoverView = document.querySelector('.main-cover')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
//var homeCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);


function assignCover() {
    var randomCover = covers[getRandomIndex(covers)];
    var randomTitle = titles[getRandomIndex(titles)];
    var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
    var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
    coverImage.src = randomCover; 
    coverTitle.innerText = randomTitle;
    tagline1.innerText = randomDescriptor1;
    tagline2.innerText = randomDescriptor2;
};

assignCover();

function hideShowMakeCover(){
  mainCoverView.classList.add('hidden');
  randomCoverButton.style.display = 'none';
  saveCoverButton.style.display = 'none';
  hiddenHomeButton.classList.remove('hidden');
  form.classList.remove('hidden');
}


function hideShowSavedCover(){
  mainCoverView.classList.add('hidden');
  randomCoverButton.style.display = 'none';
  saveCoverButton.style.display = 'none';
  hiddenHomeButton.classList.remove('hidden');
  savedCoversView.classList.remove('hidden');




}

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', assignCover);

makeYourOwnCoverButton.addEventListener('click', hideShowMakeCover);

viewSavedCoverButton.addEventListener('click', hideShowSavedCover)
// Create your event handlers and other functions here 👇


//We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
