const addMovieModal = document.getElementById('add-modal');
const addMovieBtn = document.getElementById('addMovieBtn');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.getElementById('cancelBtn');


const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
}

const cancelAddMovie = () => {
  toggleMovieModal();
}

const backdropClickHandler = () => {
  toggleMovieModal();
};

addMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelBtn.addEventListener('click', cancelAddMovie);