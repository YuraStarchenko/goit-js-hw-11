// import Notiflix from 'notiflix';
// import simpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import PixabayApiService from './pixabayAPI.js';
// import  createMarkup from './markup';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createMarkup from './markup';
import PixabayApiService from './pixabayAPI.js';

const refs = {
  searchForm: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

// loadMoreBtn.classList.add('is-hidden');

const pixabayApiService = new PixabayApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  clearGalleryContainer();
  pixabayApiService.query = e.currentTarget.searchQuery.value.trim();
  if (pixabayApiService.query === '') {
    return Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  pixabayApiService.resetPage();
  pixabayApiService.fetchHits().then(appendGalleryMarkup);
}

function onLoadMore() {
  pixabayApiService.fetchHits().then(appendGalleryMarkup);
}

function appendGalleryMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
}

function clearGalleryContainer() {
  refs.gallery.innerHTML = '';
}
