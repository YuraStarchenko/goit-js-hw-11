import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchData } from "./api";
import { createMarkupImg } from "./markup"

const refs = {
  form: document.getElementById('search-form'),
};

refs.form.addEventListener('submit', onSubmitForm);


function onSubmitForm(e) {
	e.preventDefault();
	
	const searchQuery = e.currentTarget.elements.searchQuery.value;
	
	const options = {
    headers: {
      Authorization: '33854415-dab75466e51d96ca7439b60b4',
    },
	};
	
	const url = `https://pixabay.com/api/images/?q=${searchQuery}&image_type=photo`;

	fetch(url, options)
		.then(r => r.json())
		.then(console.log);
}