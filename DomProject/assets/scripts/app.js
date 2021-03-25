const addMovieModal = document.getElementById('add-modal');
const addMovieBtn = document.getElementById('addMovieBtn');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.getElementById('cancelBtn');
const successBtn = document.getElementById('successBtn');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
 if (movies.length === 0) {
    entryTextSection.style.display = 'block';
 } else {
    entryTextSection.style.display = 'none';
 }
}; 

const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
}

const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  cancelDeletionButton.addEventListener('click', closeMovieModal);
  confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
}

const renderNewMovieElement = (id,title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.appendChild(newMovieElement);
};


const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
}


const closeMovieModal = () => {
  toggleBackdrop();
  addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
}

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};


const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInput();
}

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if(
    titleValue.trim() === '' || 
    imageUrlValue.trim() === '' || 
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5 
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
}

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletion();
};

addMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelBtn.addEventListener('click', cancelAddMovieHandler);
successBtn.addEventListener('click', addMovieHandler);