// import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import PixabayApiService from './pixabayAPI.js';
import { createMarkup } from './markup';

const refs = {
  form: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
};

const pixabayApiService = new PixabayApiService();
console.log(pixabayApiService);

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const value = form.elements.searchQuery.value.trim();
  pixabayApiService.searchQuery = value;
  pixabayApiService.resetPage();
  clearGalleryList();
  fetchHits().finally(() => form.reset());
}

function fetchHits() {
  loadMoreBtn.disable();

  return pixabayApiService
    .getPixabay()
    .then(hits => {
      if (hits.length === 0) throw new Error('no data');

      return hits.reduce((markup, hits) => createMarkup(hits) + markup, '');
    })
    .then(markup => {
      appendGalleryToList(markup);
    })
    .catch(onError);
}

function appendGalleryToList(markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}

function clearGalleryList(markup) {
  gallery.innerHTML = '';
}

function onError(err) {
  console.error(err);
}
