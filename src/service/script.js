import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createMarkup from './markup';
import HitsPixabayApi from './pixabayAPI.js';
import LoadMoreBtn from './LoadMoreBtn';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

const hitsPixabayApi = new HitsPixabayApi();
const loadMoreBtn = new LoadMoreBtn({
  selector: '#load-more',
  isHidden: true,
});
console.log(hitsPixabayApi);
console.log(loadMoreBtn);

form.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', fetchHits);

function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const value = form.elements.searchQuery.value.trim();
  removeHitsImage();
  hitsPixabayApi.resetPage();
  loadMoreBtn.show();
  hitsPixabayApi.searchQuery = value;

  fetchHits().finally(() => form.reset());
}

async function fetchHits() {
  loadMoreBtn.disable();

  try {
    const hits = await hitsPixabayApi.getHits();

    if (hits.length === 0 || hitsPixabayApi.searchQuery === '')
      return  Notify.failure (
        'Sorry, there are no images matching your search query. Please try again.'
      );
    const markup = hits.reduce(
      (markup, hits) => createMarkup(hits) + markup,
      ''
    );
    appendHitsImage(markup);
    loadMoreBtn.enable();
	} catch (err) {
		loadMoreBtn.hide();
    console.error(err);
  }
}

function appendHitsImage(markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}

function removeHitsImage() {
  gallery.innerHTML = '';
}

// function onError(err) {
//   console.error(err);
//   loadMoreBtn.hide();
// }
