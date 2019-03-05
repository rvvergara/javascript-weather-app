import {
  format,
} from 'date-fns';

let tempUnitC = true;
let fetchedWeatherData;
const toggleTempUnit = () => {
  tempUnitC = !tempUnitC;
};

[...document.getElementsByName("temp")].forEach(radio => {
  radio.addEventListener("change", e => {
    e.stopPropagation();
    toggleTempUnit();
    fetchedWeatherData.forEach((data, index) =>
      tempDisplays(data, getCardElements(), index)
    );
  });
});

// Function to generate card elements

const getCardElements = () => {
  return {
    foreCastDates: [...document.getElementsByClassName("forecast-date")],
    weatherStateImgs: [...document.getElementsByClassName("weather-state")],
    theTemps: [...document.getElementsByClassName("the-temp")],
    minTemps: [...document.getElementsByClassName("min-temp")],
    maxTemps: [...document.getElementsByClassName("max-temp")],
    humidityDisplays: [...document.getElementsByClassName("humidity")],
    unitSpans: [...document.getElementsByClassName("temp-unit")]
  };
};

const showData = dataArr => {
  // Generate dynamic HTML for big card
  // Assign dataObj elements in DOM
  fetchedWeatherData = dataArr[1];
  document.getElementById("cityName").innerText = dataArr[0];
  const cardElements = getCardElements();
  dataArr[1].forEach((data, index) => {
    weatherCard(data, index, cardElements);
  });
};

// We need a function that generates the html structure for the data

// 1. For the big card
const weatherCard = (data, index, cardElements) => {
  // We need to extract elements from data that we need
  const {
    weather_state_abbr,
    the_temp,
    min_temp,
    max_temp,
    humidity,
    applicable_date
  } = data;
  cardElements.foreCastDates[index].innerText = parseDate(applicable_date, index);
  cardElements.weatherStateImgs[index].setAttribute(
    "src",
    `https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`
  );
  // Temperature displays

  tempDisplays({
      the_temp,
      min_temp,
      max_temp
    },
    cardElements,
    index
  );

  cardElements.humidityDisplays[index].innerText = Math.round(humidity);
};

const tempDisplays = (tempObj, cardElements, index) => {
  const {
    the_temp,
    min_temp,
    max_temp
  } = tempObj;
  const suffix = tempUnitC ? "&#176;C" : "&#176;F";
  cardElements.theTemps[index].innerHTML = Math.round(tempToF(the_temp, tempUnitC)) + suffix;
  cardElements.maxTemps[index].innerHTML = Math.round(tempToF(max_temp, tempUnitC)) + suffix;
  cardElements.minTemps[index].innerHTML = Math.round(tempToF(min_temp, tempUnitC)) + suffix;
};

const tempToF = (temp, tempUnitC) => {
  return !tempUnitC ? (9 / 5) * temp + 32 : temp;
};

const parseDate = (date, index) => {
  const weatherDate = index == 0 ? format(new Date(date), "dddd MMMM DD, YYYY") : format(new Date(date), "dddd");
  return weatherDate;
};

const loading = () => {
  document.getElementById("loading").removeAttribute("class");
};

export {
  showData,
  loading,
  tempDisplays
};