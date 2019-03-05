const constants = {
  weatherSearchForm: document.getElementsByTagName("form")[0],
  cityNameInput: document.getElementById("cityNameInput"),

  loadingDiv: document.getElementById("loading"),

  errorDiv: document.getElementById('error'),

  mainDataRow: document.getElementsByClassName("row")[0],

  cityNameDisplay: document.getElementById('city-name'),

  weatherSearchUrl: "https://www.metaweather.com/api/location/",

  locationSearchUrl: "https://www.metaweather.com/api/location/search/?query=",

  corsProxyUrl: `https://yacdn.org/proxy/`,


  // ....................................

  tempRadioBtns: [...document.getElementsByName("temp")],

  foreCastDates: [...document.getElementsByClassName("forecast-date")],

  weatherStateImgs: [...document.getElementsByClassName("weather-state")],

  theTemps: [...document.getElementsByClassName("the-temp")],

  minTemps: [...document.getElementsByClassName("min-temp")],

  maxTemps: [...document.getElementsByClassName("max-temp")],

  humidityDisplays: [...document.getElementsByClassName("humidity")],
};

export default constants;