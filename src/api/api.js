import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api';
const KEY = '33854415-dab75466e51d96ca7439b60b4';
const searchOptions = 'image_type=photo&orientation=horizontal&safesearch=true';

export function fetchPhotos(query, page) {
  const search = `${BASE_URL}?key=${KEY}&q=${query}&${searchOptions}&page=${page}$per_page=30`;
	return axios.get(URL);
}