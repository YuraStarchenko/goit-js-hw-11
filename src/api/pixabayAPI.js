const ENDPOINT = 'https://pixabay.com/api/';

export default class PixabayApiService {
  constructor() {
    this.page = 5;
    this.searchQuery = '';
  }

  getPixabay() {
    const URL = `${ENDPOINT}?key=33854415-dab75466e51d96ca7439b60b4?q=${this.searchQuery}&per_page=10&page=${this.page}`;

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
