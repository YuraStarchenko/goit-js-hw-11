const URL = 'https://pixabay.com/api/?key=33854415-dab75466e51d96ca7439b60b4&q=image_type=photo&orientation=horizontal&safesearch=true';

fetch(URL)
	.then((response) => response.json())
	.then(({hits}) => console.log(hits));