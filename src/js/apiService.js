const options = {
  headers: {
    Authorization: "19995582-5874b371a45400d9278e4a3e4",
  },
};
const API_KEY = "19995582-5874b371a45400d9278e4a3e4";
var URL =
  "https://pixabay.com/api/?key=" +
  API_KEY +
  "&q=" +
  encodeURIComponent("red roses");
$.getJSON(URL, function (data) {
  if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function (i, hit) {
      console.log(hit.pageURL);
    });
  else console.log("No hits");
});
