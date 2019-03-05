import {
  format,
} from 'date-fns';
import fetchData from './fetchCityData'
import {
  elements,
  displayElements,
} from './elements';


const toggleTempUnit = (isCelsius) => {
  isCelsius = !isCelsius;
};

elements.tempRadioBtns.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    e.stopPropagation();
    toggleTempUnit(elements.tempUnitC);
    elements.fetchedWeatherData.forEach((data, index) => tempDisplays(data, displayElements, index));
  });
});

const showData = (dataArr, row, cityName) => {
  [elements.fetchedWeatherData, cityName.innerText] = [dataArr[1], dataArr[0]];

  const cardElements = displayElements;

  // Remove invisible and animate classes
  row.classList.remove("invisible");

  row.classList.add("animate");
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

  cardElements.foreCastDates[index].innerText = parseDate(applicable_date, index);
  cardElements.weatherStateImgs[index].setAttribute(
    "src",
    `https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`
  );

  // Temperature displays

  tempDisplays({
      the_temp,
      min_temp,
      max_temp,
    },
    cardElements,
    index);

  cardElements.humidityDisplays[index].innerText = Math.round(humidity);
};

const tempDisplays = (tempObj, cardElements, index, isCelsius) => {
  const {
    the_temp,
    min_temp,
    max_temp,
  } = tempObj;
  const suffix = isCelsius ? "&#176;C" : "&#176;F";

  const tempElements = [cardElements.theTemps, cardElements.maxTemps, cardElements.minTemps];
  const tempData = [the_temp, max_temp, min_temp];
  tempElements.forEach((el, i) => {
    el[index].innerHTML = Math.round(tempToF(tempData[i], elements.tempUnitC)) + suffix;
  });
};

const tempToF = (temp, isCelsius) => {
  return !isCelsius ? (9 / 5) * temp + 32 : temp;
};

const parseDate = (date, index) => {
  const weatherDate = index === 0 ? format(new Date(date), "dddd MMMM DD, YYYY") : format(new Date(date), "dddd");
  return weatherDate;
};

const loading = (loadDiv) => {
  if ([...loadDiv.classList].includes("hidden")) {
    loadDiv.classList.remove("hidden");
  } else {
    loadDiv.classList.add("hidden");
  }
};

function fetchCityData(...args) {
  fetchData(...args).then((data) => {
    const [row, cityName, loadDiv] = [
      [...args][5],
      [...args][6],
      [...args][8],
    ];
    // Remove fetch data... message
    loading(loadDiv);
    // Fill relevant dom elements with data
    showData([data.title, data.consolidated_weather.slice(0, 5)], row, cityName);
  }).catch(() => {
    const [row, erDiv, loadDiv] = [
      [...args][5],
      [...args][7],
      [...args][8],
    ];
    displayErrorMsg(row, erDiv, loadDiv);
  });
}

const displayErrorMsg = (row, erDiv, loadDiv) => {
  row.classList.add('invisible');
  loadDiv.classList.add('hidden');
  erDiv.classList.remove('d-none');
};

const submitCallback = (argsArr) => {
  const [row, cityDisplay, input, locUrl, weatherUrl, locProp, proxyUrl, errDiv, loadDiv] = argsArr;
  // Make row invisible again
  row.classList.add("invisible");
  // Remove animate class animate if any
  row.classList.remove("animate");
  // If there are any error messages visible just add class d-none to it
  errDiv.setAttribute("class", 'd-none');
  fetchCityData(locUrl, weatherUrl, input.value, locProp, proxyUrl, row, cityDisplay, errDiv, loadDiv);
};

export {
  loading,
  submitCallback,
};