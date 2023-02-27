import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33854415-dab75466e51d96ca7439b60b4';
export default class HitsPixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 5;
  }
  fetchHits() {
    const URL = `${ENDPOINT}?key=${KEY}&q=${this.searchQuery}&per_page=${this.per_page}&page=${this.page}`;
    // if (!URL.ok) {
    //   //	15) Якщо користувач ввів назву країни,
    //   //				якої не існує, бекенд поверне не порожній масив,
    //   //				а помилку зі статус кодом 404 - не знайдено.
    //   throw new Error(
    //     Notify.failure('Oops, there is no country with that name')
    //   );
    //}
    return fetch(URL)
      .then(response => response.json())
      .then(({ hits }) => {
        this.nextPage();
        return hits;
      });
    //   const { data } = await axios.get(URL);
    //   this.nextPage();
    //   return data.hits;
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
}
