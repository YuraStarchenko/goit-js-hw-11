// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { refs } from './refs';
// import createMarkup from './markup';
// import PixabayApiService from './pixabayAPI.js';
// import LoadMoreBtn from './LoadMoreBtn';

// const pixabayApiService = new PixabayApiService();
// const loadMoreBtn = new LoadMoreBtn({
// 	selector: '#',
// 	isHidden: true,
// });
// console.log(loadMoreBtn);

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.button.addEventListener('click', onLoadMore);

// async function onSearch(e) {
//   e.preventDefault();
//   clearGalleryContainer();
//   pixabayApiService.query = e.currentTarget.searchQuery.value.trim();

//   if (pixabayApiService.query === '') {
//     return Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//   }

//   pixabayApiService.resetPage();
//   pixabayApiService.fetchHits().then(appendGalleryMarkup);
// }

// function onLoadMore() {
// 	pixabayApiService.fetchHits().then(appendGalleryMarkup);
// }

// function appendGalleryMarkup(hits) {
//   refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
// }

// function clearGalleryContainer() {
//   refs.gallery.innerHTML = '';
// }

import fetchData from './pixabayAPI.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const value = form.elements.searchQuery.value.trim();

  fetchData(value)
    .then(({ hits }) => {
      if (hits.length === 0)
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      return hits.reduce((markup, hits) => createMarkup(hits) + markup, '');
    })
    .then(updateHitsImage)
    .catch(onError)
    .finally(() => form.reset());
}

function updateHitsImage(markup) {
  gallery.innerHTML = markup;
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
				<b>Likes</b>:
				${likes}
				</p>
				<p class="info-item">
  				<b>Views</b>:
				${views}
				</p>
				<p class="info-item">
  				<b>Comments</b>:
				${comments}
				</p>
				<p class="info-item">
  				<b>Downloads</b>:
				${downloads}
				</p>				
			</div>				
		</div>
	`;
}

function onError(err) {
  console.error(err);
  updateHitsImage('<p>Hits not found</p>');
}
