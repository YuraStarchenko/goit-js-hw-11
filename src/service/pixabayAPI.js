import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33854415-dab75466e51d96ca7439b60b4';
export default class HitsPixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
		this.per_page = 40;
		this.totalPages = 0;
  }
  async fetchHits() {
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

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
	}
	
  setTotal(total) {
    this.totalPages = total;
  }

  hasMorePhotos() {
    return this.page < Math.ceil(this.totalPages / this.per_page);
  }
}