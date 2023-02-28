import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createMarkup from './markup';
import HitsPixabayApi from './pixabayAPI.js';
import LoadMoreBtn from './LoadMoreBtn';

let pagesAmount;

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

const hitsPixabayApi = new HitsPixabayApi();
const loadMoreBtn = new LoadMoreBtn({
  selector: '#load-more',
  isHidden: true,
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: '250',
});

form.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', fetchHits);

function onSubmit(e) {
  e.preventDefault();

  hitsPixabayApi.query = e.currentTarget.elements.searchQuery.value.trim();

  if (hitsPixabayApi.query === ``) {
    return Notify.info(`Please enter the text request`);
  }
  removeHitsImage();
  hitsPixabayApi.resetPage();
  loadMoreBtn.show();
  fetchHits();
}

function fetchHits() {
  loadMoreBtn.disable();
  hitsPixabayApi.fetchHits().then(({ hits, totalHits }) => {
    appendHitsImage(hits);
    lightbox.refresh();
    loadMoreBtn.enable();
    if (Math.ceil(totalHits / 40)) {
      return (
        Notify.success(`Hooray! We found ${totalHits} images.`),
        loadMoreBtn.hide()
      );
    } else {
      loadMoreBtn.show();
    }
    if (hits.length < 1) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
			);
			loadMoreBtn.show();
    }
  });
}

function appendHitsImage(hits) {
  gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
}

function removeHitsImage() {
  gallery.innerHTML = '';
}
