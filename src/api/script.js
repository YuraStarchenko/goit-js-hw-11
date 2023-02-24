// import Notiflix from 'notiflix';
// import simpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchData } from "./api.js";
// import { createMarkupImg } from './markup';

const refs = {
  form: document.getElementById('search-form'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
	e.preventDefault()

	const form = e.currentTarget;
	const value = form.elements.searchQuery.value.trim();
	console.log(value);
}

