import fetchData from "./api.js";

const form = document.getElementById("search-form");

form.addEventListener('submit', onSubmitForm);


function onSubmitForm(e) {
	e.preventDefault();

	const form = e.currentTarget;
	const value = form.elements.searchQuery.value.trim();

	fetchData(value).then(({ hits }) => {
		console.log(hits);
 });
}