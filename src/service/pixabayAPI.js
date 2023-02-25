// import axios from 'axios';

// const ENDPOINT = 'https://pixabay.com/api/';
// export default class PixabayApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 5;
//     this.per_page = 10;
//   }
//   async getPixabay() {
//     const searchParams = new URLSearchParams({
//       key: '33854415-dab75466e51d96ca7439b60b4',
//       q: `${this.searchQuery}`,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: `${this.page}`,
//       per_page: `${this.per_page}`,
//     });

//     const response = await axios.get(`${ENDPOINT}?${searchParams}`);
//     return response.data;
//   }
//   nextPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchHits() {
    const ENDPOINT = 'https://pixabay.com/api/';
    const KEY = '33854415-dab75466e51d96ca7439b60b4';
    const URL = `${ENDPOINT}/?key=${KEY}&q=${this.searchQuery}?&per_page=5&page=${this.page}`;

    return fetch(URL)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
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
}
