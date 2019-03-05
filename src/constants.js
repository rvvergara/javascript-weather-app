module.exports = {
  weatherSearchForm: document.getElementsByTagName("form")[0],
  cityNameInput: document.getElementById("cityNameInput"),

  loadingDiv: document.getElementById("loading"),

  errorDiv: document.getElementById('error'),

  mainDataRow: document.getElementsByClassName("row")[0],

  cityNameDisplay: document.getElementById('city-name'),

  weatherSearchUrl: "https://www.metaweather.com/api/location/",

  locationSearchUrl: "https://www.metaweather.com/api/location/search/?query=",

  corsProxyUrl: `https://yacdn.org/proxy/`,
};