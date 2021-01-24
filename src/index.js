import css from "./css/styles.css";
//import PhotoApiService from "./js/apiService.js";
import asyncFetch from "./js/apiService.js";
import refs from "./js/refs.js";
import debounce from "lodash.debounce";
import "@pnotify/core/dist/PNotify.css";
import { error } from "@pnotify/core";
import loadBigImg from "./js/lightbox.js";


//const photoApiService = new PhotoApiService();

const { input, ulGallery, searchForm, loadMoreBtn, btnSearch } = refs;

searchForm.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);
ulGallery.addEventListener("click", loadBigImg);

function onSearch(event) {
  event.preventDefault();
  clearGallery();
  asyncFetch.resetPage();

  const inputValue = event.currentTarget.elements.query.value;

  asyncFetch.getFetch(inputValue, ulGallery);
  setTimeout(() => {
    loadMoreBtn.classList.remove("is-hidden");
  }, 1000);

  input.value = "";
}

function onLoadMore() {
  asyncFetch.setPage();
  asyncFetch.getFetch(undefined, ulGallery);
}

function clearGallery() {
  ulGallery.innerHTML = "";
}
