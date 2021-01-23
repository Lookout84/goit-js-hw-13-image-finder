export default class PhotoApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  fetchArticals() {
    const options = {
      headers: {
        Authorization: "19995582-5874b371a45400d9278e4a3e4",
      },
    };

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`;

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        this.page += 1;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
