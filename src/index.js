import css from "./css/styles.css";
//import PhotoApiService from "./js/apiService.js";
import asyncFetch from "./js/apiService.js";
import refs from "./js/refs.js";
import debounce from "lodash.debounce";
import "@pnotify/core/dist/PNotify.css";
import { error } from "@pnotify/core";
import basicLightbox from "basiclightbox";
import e from "cors";

//const photoApiService = new PhotoApiService();

const { input, ulGallery, searchForm, loadMoreBtn, btnSearch } = refs;

searchForm.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(event) {
  btnSearchActive();
  event.preventDefault();
  clearGallery();
  asyncFetch.resetPage();

  const inputValue = event.currentTarget.elements.query.value;

  asyncFetch.getFetch(inputValue, ulGallery);
  setTimeout(() => {
    loadMoreBtn.classList.remove("is-hidden");
  }, 1000);
}

function onLoadMore() {
  asyncFetch.setPage();
  asyncFetch.getFetch(undefined, ulGallery);
}

function clearGallery() {
  ulGallery.innerHTML = "";
}

function btnSearchActive() {
  if ((input.value = "")) {
    btnSearch.disabled = true;
  } else btnSearch.disabled = false;
}

console.log(input.value);
