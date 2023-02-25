// import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import PixabayApiService from './pixabayAPI.js';
// import { createMarkupImg } from './markup';

const refs = {
  form: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const pixabayApiService = new PixabayApiService();
console.log(pixabayApiService);

refs.form.addEventListener('submit', onSubmitForm);
refs.loadMoreBtn.addEventListener('click', fetchHits);

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
 return  pixabayApiService
    .getPixabay()
    .then(hits => {
      if (hits.length === 0) throw new Error('no data');

      return hits.reduce((markup, hits) => createMarkup(hits) + markup, '');
    })
    .then(appendGalleryToList)
    .catch(onError);
}

function appendGalleryToList(markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}

function clearGalleryList(markup) {
  gallery.innerHTML = '';
}

function createMarkup({
  tags,
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
	<div class="photo-card">
			<a class="images-link" href="${largeImageURL}">
				<img src="${webformatURL}" alt="${tags}" loading="lazy" />
			</a>
			<div class="info">
				<p class="info-item">
				<b>Likes</b>${likes}
				</p>
				<p class="info-item">
  				<b>Views</b>
				${views}
				</p>
				<p class="info-item">
  				<b>Comments</b>
				${comments}
				</p>
				<p class="info-item">
  				<b>Downloads</b>
				${downloads}
				</p>				
			</div>				
		</div>
	`;
}

function onError(err) {
  console.error(err);
}
