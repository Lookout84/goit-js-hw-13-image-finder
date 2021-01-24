// export default class PhotoApiService {
//   constructor() {
//     this.searchQuery = "";
//     this.page = 1;
//   }

//   fetchArticals() {
//     const options = {
//       headers: {
//         Authorization: "19995582-5874b371a45400d9278e4a3e4",
//       },
//     };

//     const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`;

//     fetch(url, options)
//       .then((response) => response.json())
//       .then((data) => {
//         this.incrementPage();
//         return data.articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

// var API_KEY = '19995582-5874b371a45400d9278e4a3e4';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

import imageCard from "../templates/imagecard.hbs";

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
    let key = `19995582-5874b371a45400d9278e4a3e4`;
    this.queryValue = value;

    let params = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}`;

    let url = this.baseUrl + params;

    let options = {
      method: "GET",
      headers: {
        Authorization: key,
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const data = result.photos;

    console.log(data);
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
