import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';

export default class PixabayApiService {
  constructor() {
    this.page = 5;
    this.searchQuery = '';
    this.key = '33854415-dab75466e51d96ca7439b60b4';
    this.searchOptions =
      'image_type=photo&orientation=horizontal&safesearch=true';
  }
  async getPixabay() {
    const URL = `${ENDPOINT}/?key=${this.key}?q=${this.searchQuery}&${searchOptions}&per_page=10&page=${this.page}`;

    const response = await axios.get(URL);
    return response.data.hits;
  }
  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
