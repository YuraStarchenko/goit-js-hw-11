import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import createMarkup from './markup';
import PixabayApiService from './pixabayAPI.js';

const pixabayApiService = new PixabayApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(e) {
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