// import Notiflix from 'notiflix';
// import simpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import PixabayApiService from './pixabayAPI.js';
// import  createMarkup from './markup';

// const refs = {
//   form: document.getElementById('search-form'),
//   gallery: document.querySelector('.gallery'),
//   loadMoreBtn: document.querySelector('.load-more'),
// };
// const pixabayApiService = new PixabayApiService();
// console.log(pixabayApiService);

// refs.form.addEventListener('submit', onSubmit);
// refs.loadMoreBtn.addEventListener('submit', onMoreBtn);

// let searchQuery = '';

// function onSubmit(e) {
// 	e.preventDefault();

// 	searchQuery = e.currentTarget.elements.searchQuery.value;
// 	pixabayApiService.getPixabay(searchQuery);
// const searchName = ;
// console.Log(searchName);
// 	clearGallery();

// 	try {
// 		const res = await fetchHits(searchName);
// 	}

// const form = e.currentTarget;
// const value = form.elements.searchQuery.value.trim();
// pixabayApiService.searchQuery = value;
// pixabayApiService.resetPage();
// // clearGalleryList();
// fetchHits().finally(() => form.reset());
// }

// function onMoreBtn() {

// }

// function fetchHits() {
//   // loadMoreBtn.disable();

//   return pixabayApiService
//     .getPixabay()
//     .then(hits => {
//       if (hits.length === 0) throw new Error('no data');

//       return hits.reduce((markup, hits) => createMarkup(hits) + markup, '');
//     })
//     .then(markup => {
//       appendGalleryToList(markup);
//     })
//     // .catch(onError);
// }

// function appendGalleryToList(markup) {
//   gallery.insertAdjacentHTML('beforeend', markup);
// }

// function clearGalleryList(markup) {
//   gallery.innerHTML = '';
// }

// function onError(err) {
//   console.error(err);
// }
// const lightbox = new SimpleLightbox('.gallery a', {
// 	captionsData:'alt',
// 	captionPosition:'bottom',
// 	captionDelay:'250'
// });

import PixabayApiService from './pixabayAPI.js';

const refs = {
  searchForm: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const pixabayApiService = new PixabayApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  PixabayApiService.searchQuery = e.currentTarget.searchQuery.value.trim();

  pixabayApiService.fetchHits(searchQuery);
}

function onLoadMore() {
  pixabayApiService.fetchHits(searchQuery);
}
