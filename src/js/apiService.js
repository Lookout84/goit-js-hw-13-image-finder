import imageCard from "../templates/imagecard.hbs";
import "@pnotify/core/dist/PNotify.css";
import { error } from "@pnotify/core";

export default {
  query: "",
  page: 1,
  perPage: 12,
  baseUrl: `https://pixabay.com/api/`,

  get queryValue() {
    return this.query;
  },
  set queryValue(value) {
    return (this.query = value);
  },

  async getFetch(value = this.query, z) {
    let key = `20004677-e0c621e42f0d912e7de39a0de`;
    this.queryValue = value;

    let params = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${key}`;

    let url = this.baseUrl + params;

    const response = await fetch(url);
    const result = await response.json();
    const data = result.hits;
    const items = imageCard(data);

    z.insertAdjacentHTML("beforeend", items);

    window.scrollTo({
      top: z.scrollHeight,
      behavior: "smooth",
    });
    return z;
  },

  setPage() {
    this.page += 1;
    return this.page;
  },

  resetPage() {
    this.page = 1;
    return this.page;
  },
};
