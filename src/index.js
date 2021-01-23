import css from "./css/styles.css";
import PhotoApiService from "./js/apiService.js";

const photoApiService = new PhotoApiService();

function onSearch(event) {
  event.preventDefault();
  photoApiService.query = event.currentTarget.elements.query.value;
  photoApiService.fetchArticals();
}
