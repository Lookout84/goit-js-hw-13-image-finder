import css from "./css/styles.css";
import asyncFetch from "./js/apiService.js";
import refs from "./js/refs.js";
import imageCard from "./templates/imagecard.hbs";

//const photoApiService = new PhotoApiService();

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(event) {
  event.preventDefault();
  asyncFetch.query = event.currentTarget.elements.query.value;
  asyncFetch.resetPage();
  asyncFetch.getFetch();
}

function onLoadMore() {
  asyncFetch.getFetch();
}
