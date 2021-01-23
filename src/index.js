import css from "./css/styles.css";
import PhotoApiService from "./js/apiService.js";
import refs from "./js/refs.js";

const photoApiService = new PhotoApiService();

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(event) {
  event.preventDefault();
  photoApiService.query = event.currentTarget.elements.query.value;
  photoApiService.fetchArticals();
}

function onLoadMore() {
  photoApiService.fetchArticals();
}
