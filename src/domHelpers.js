import {
  parse
} from "path";

let tempUnitC = true;
let fetchedWeatherData;
const toggleTempUnit = () => {
  tempUnitC = !tempUnitC;
}

// Function to generate card elements

const getCardElements = () => {
  return {
    foreCastDates: [...document.getElementsByClassName("forecast-date")],
    weatherStateImgs: [...document.getElementsByClassName("weather-state")],
    theTemps: [...document.getElementsByClassName("the-temp")],
    minTemps: [...document.getElementsByClassName("min-temp")],
    maxTemps: [...document.getElementsByClassName("max-temp")],
    humidityDisplays: [...document.getElementsByClassName("humidity")],
    unitSpans: [...document.getElementsByClassName("temp-unit")],
  };
};

[...document.getElementsByName("temp")].forEach(radio => {
  radio.addEventListener("change", e => {
    e.stopPropagation();
    toggleTempUnit();
    fetchedWeatherData.forEach((data, index) => tempDisplays(data, getCardElements(), index));
  });
});


const showData = (dataArr) => {
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
    applicable_date,
  } = data;
  cardElements.foreCastDates[index].innerText = parseDate(applicable_date);
  cardElements.weatherStateImgs[index].setAttribute("src", `https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`);
  // Temperature displays

  tempDisplays({
    the_temp,
    min_temp,
    max_temp,
  }, cardElements, index);

  cardElements.humidityDisplays[index].innerText = Math.round(humidity);
};

const tempDisplays = (tempObj, cardElements, index) => {
  const {
    the_temp,
    min_temp,
    max_temp,
  } = tempObj;
  if (tempUnitC) {
    let suffix = "&#176;C";
    cardElements.theTemps[index].innerHTML = Math.round(the_temp) + suffix;
    cardElements.maxTemps[index].innerText = Math.round(max_temp);
    cardElements.minTemps[index].innerText = Math.round(min_temp);
  } else {
    let suffix = "&#176;F";
    cardElements.theTemps[index].innerHTML = Math.round(tempToF(the_temp)) + suffix;
    cardElements.maxTemps[index].innerText = Math.round(tempToF(max_temp));
    cardElements.minTemps[index].innerText = Math.round(tempToF(min_temp));
  }
};

const tempToF = temp => 9 / 5 * (temp) + 32;

const parseDate = (date) => {
  const weatherDate = new Date(date);
  return `${weatherDate.toDateString()} ${weatherDate.getHours()}:${weatherDate.getMinutes()}`
};

const loading = () => {
  document.getElementById("loading").removeAttribute("class");
};

export {
  showData,
  loading,
  tempDisplays
};