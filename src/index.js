import css from "./css/styles.css";
//import PhotoApiService from "./js/apiService.js";
import asyncFetch from "./js/apiService.js";
import refs from "./js/refs.js";
//import debounce from "lodash.debounce";
import "@pnotify/core/dist/PNotify.css";
//import { error } from "@pnotify/core";
import loadBigImg from "./js/lightbox.js";
import LoadMoreBtn from "./js/button.js";

//const photoApiService = new PhotoApiService();

const { input, ulGallery, searchForm } = refs;
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

searchForm.addEventListener("submit", onSearch);
loadMoreBtn.refs.button.addEventListener("click", onLoadMore);
ulGallery.addEventListener("click", loadBigImg);

function onSearch(event) {
  event.preventDefault();
  clearGallery();
  asyncFetch.resetPage();

  const inputValue = event.currentTarget.elements.query.value;
  loadMoreBtn.show();
  loadMoreBtn.disable()
  asyncFetch.getFetch(inputValue, ulGallery, loadMoreBtn.enable());

  input.value = "";
}

function onLoadMore() {
  loadMoreBtn.disable()
  asyncFetch.setPage();
  asyncFetch.getFetch(undefined, ulGallery, loadMoreBtn.enable());
}

function clearGallery() {
  ulGallery.innerHTML = "";
}
