import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33854415-dab75466e51d96ca7439b60b4';
export default class HitsPixabayApi {
  constructor() {
    this.page = 1;
    this.per_page = 10;
    this.searchQuery = '';
  }
  async getHits() {
    const URL = `${ENDPOINT}?key=${KEY}&q=${this.searchQuery}&per_page=${this.per_page}&page=${this.page}`;

    const { data } = await axios.get(URL);
    this.nextPage();
    return data.hits;
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
