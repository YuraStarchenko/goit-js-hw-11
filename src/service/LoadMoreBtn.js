export default class LoadMoreBtn {
  constructor({ selector, isHidden }) {
    this.button = this.getButton(selector);
    if (isHidden) this.hide();
    else this.show();
  }

  getButton(selector) {
    return document.querySelector(selector);
  }

  hide() {
    this.button.classList.add('hidden');
  }

  show() {
    this.button.classList.remove('hidden');
  }

  disable() {
    this.button.disabled = true;
    this.button.textContent = 'Loading...';
  }
  enable() {
    this.button.disabled = false;
    this.button.textContent = 'Load more';
  }
}

// function addTotalInfoCounter(data) {
//   Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
// }

// function noInfoForSearch() {
//   Notiflix.Notify.failure('Please specify your search query.');
// }

// function endOfContent() {
//   Notiflix.Notify.warning(
//     "We're sorry, but you've reached the end of search results."
//   );
// }

// function alertNoContentFound() {
//   Notiflix.Notify.failure(
//     'Sorry, there are no images matching your search query. Please try again.'
//   );
// }

// let totalHits = 0;

  // if (query === '') {
  //   noInfoForSearch();
  //   return;
  // }

	    //   if (data.totalHits === 0) {
      //   alertNoContentFound();
      // } else {
      //   createCards(data.hits);
      //   const lightbox = new SimpleLightbox('.gallery a', {
      //     captionDelay: 250,
      //   }).refresh();
      //   addTotalInfoCounter(data);

      //   if (data.totalHits > perPage) {
      //     loadMoreButton.classList.remove('is-hidden');