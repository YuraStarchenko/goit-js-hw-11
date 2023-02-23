import axios from 'axios';

const BASE_URL = "https://pixabay.com/api";
const KEY = "key=33854415-dab75466e51d96ca7439b60b4";

function fetchData(query) {
	const search = `${BASE_URL}?${KEY}&q=image_type=photo&orientation=horizontal&safesearch=true?q=${query}`;
	
	return fetch(search).then((response) => response.json())
}

export default fetchData;
