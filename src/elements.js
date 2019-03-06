const elements = (() => {
  const weatherSearchForm = document.getElementsByTagName("form")[0];
  const cityNameInput = document.getElementById("cityNameInput");
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById('error');
  const mainDataRow = document.getElementsByClassName("row")[0];
  const cityNameDisplay = document.getElementById('city-name');
  const weatherSearchUrl = "https://www.metaweather.com/api/location/";
  const locationSearchUrl = "https://www.metaweather.com/api/location/search/?query=";
  const corsProxyUrl = `https://yacdn.org/proxy/`;

  const tempRadioBtns = [...document.getElementsByName("temp")];
  const foreCastDates = [...document.getElementsByClassName("forecast-date")];
  const weatherStateImgs = [...document.getElementsByClassName("weather-state")];
  const theTemps = [...document.getElementsByClassName("the-temp")];
  const minTemps = [...document.getElementsByClassName("min-temp")];
  const maxTemps = [...document.getElementsByClassName("max-temp")];
  const humidityDisplays = [...document.getElementsByClassName("humidity")];

  let tempUnitC = true;
  let fetchedWeatherData = "";

  return {
    weatherSearchForm,
    cityNameInput,
    loadingDiv,
    errorDiv,
    mainDataRow,
    cityNameDisplay,
    weatherSearchUrl,
    locationSearchUrl,
    corsProxyUrl,
    tempRadioBtns,
    foreCastDates,
    weatherStateImgs,
    theTemps,
    minTemps,
    maxTemps,
    humidityDisplays,
    tempUnitC,
    fetchedWeatherData,
    tempToggle() {
      this.tempUnitC = !this.tempUnitC;
    },
    fetchedWeatherSet(data = "") {
      data !== "" ? fetchedWeatherData = data : undefined;
      return fetchedWeatherData;
    },
  };
})();

export default elements;