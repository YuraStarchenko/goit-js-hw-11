import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33854415-dab75466e51d96ca7439b60b4';
export default class HitsPixabayApi {
  constructor() {
    this.page = 1;
    this.per_page = 5;
    this.searchQuery = '';
  }
  getHits() {
    const URL = `${ENDPOINT}?key=${KEY}&q=${this.searchQuery}&per_page=${this.per_page}&page=${this.page}`;

    return fetch(URL)
      .then(response => response.json())
      .then(({ hits }) => {
        this.nextPage();
        return hits;
      });
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
