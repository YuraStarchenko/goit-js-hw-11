// import axios from 'axios';
// export default class PixabayApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.per_page = 10;
//     this.page = 1;
//   }
//   async fetchHits() {
//     const ENDPOINT = 'https://pixabay.com/api/';
//     const KEY = '33854415-dab75466e51d96ca7439b60b4';
//     const URL = `${ENDPOINT}/?key=${KEY}&q=${this.searchQuery}?&per_page=${this.per_page}&page=${this.page}`;

//     const response = await fetch(URL);
//     const { hits } = await response.json();
//     this.incrementPage();
//     return hits;

//     // const { data } = await axios.get(URL);
//     // this.incrementPage();
//     // return data.hits;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33854415-dab75466e51d96ca7439b60b4';
// const URL = `${ENDPOINT}?key=${KEY}&q=image_type=photo&orientation=horizontal&safesearch=true&per_page=10&page=1`;

export default function fetchData(searchQuery) {
	const URL = `${ENDPOINT}?key=${KEY}&q=${searchQuery}`;
  return fetch(URL).then(response => response.json());
}
