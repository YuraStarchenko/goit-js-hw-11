import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createMarkup from './markup';
import HitsPixabayApi from './pixabayAPI.js';
import LoadMoreBtn from './LoadMoreBtn';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
// const loadMoreBtn = document.getElementById('load-more');

const hitsPixabayApi = new HitsPixabayApi();
const loadMoreBtn = new LoadMoreBtn({
  selector: '#load-more',
  isHidden: true,
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: '250',
});

// console.log(hitsPixabayApi);
// console.log(loadMoreBtn);

form.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', fetchHits);

// Щоджо порожнього інпуту, то вам перед тим як зробити запит на бекенд треба затсосувати до велью з інпута трім та привести його до буля, якщо фолс, то навіть не відправляти його. Далі ви можете порівняти довжину властивості hits. Якщо вона 0, то викинути нотифікашку, що результатів не знайшлось

// також якщо інпут порожній і немає результатів, то кнопка лоед мор має бути або дізейблед або взагалі бути відсутнєю

function onSubmit(e) {
  e.preventDefault();

  removeHitsImage();

  hitsPixabayApi.query = e.currentTarget.elements.searchQuery.value.trim();

  if (hitsPixabayApi.query === ``) {
    return Notify.info(`Please enter the text request`);
  }

  hitsPixabayApi.resetPage();

  hitsPixabayApi.fetchHits().then(hits => {
    appendHitsImage(hits);
    if (hits.length < 1) {
      return (
        Notify.failure(
          `Sorry, there are no images matching your search query. Please try again.`
        ),
        loadMoreBtn.hide()
      );
    } else {
      loadMoreBtn.show();
    }
  });
  fetchHits();
}

// function onloadMore() {
// fetchHits();
// }

function fetchHits() {
  loadMoreBtn.disable();
  hitsPixabayApi.resetPage();
  hitsPixabayApi.fetchHits().then(hits => {
    appendHitsImage(hits);
    lightbox.refresh();
    loadMoreBtn.enable();
  });
}

// async function fetchHits() {
//   loadMoreBtn.disable();

//   try {
//     const hits = await hitsPixabayApi.getHits();
//     if (hitsPixabayApi.searchQuery === 0) {
//       Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     }

//     const markup = hits.reduce(
//       (markup, hits) => createMarkup(hits) + markup,
//       ''
//     );
//     appendHitsImage(markup);
//     lightbox.refresh();
//     loadMoreBtn.enable();
//   } catch (err) {
//     loadMoreBtn.hide();
//     Notify.info("We're sorry, but you've reached the end of search results.");
//   }
// }

function appendHitsImage(hits) {
  gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
}

function removeHitsImage() {
  gallery.innerHTML = '';
}
