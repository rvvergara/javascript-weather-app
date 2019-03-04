import {
  parse
} from "path";

const showData = (dataArr) => {
  // Generate dynamic HTML for big card
  // Assign dataObj elements in DOM
  document.getElementById("cityName").innerText = dataArr[0];
  const cardElements = {
    foreCastDates: [...document.getElementsByClassName("forecast-date")],
    weatherStateImgs: [...document.getElementsByClassName("weather-state")],
    theTemps: [...document.getElementsByClassName("the-temp")],
    minTemps: [...document.getElementsByClassName("min-temp")],
    maxTemps: [...document.getElementsByClassName("max-temp")],
    humidityDisplays: [...document.getElementsByClassName("humidity")],
  };

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
  // console.log(data);
  cardElements.foreCastDates[index].innerText = parseDate(data.applicable_date);
  cardElements.weatherStateImgs[index].setAttribute("src", `https://www.metaweather.com/static/img/weather/png/${data.weather_state_abbr}.png`);
  cardElements.theTemps[index].innerText = data.the_temp;
  cardElements.maxTemps[index].innerText = data.max_temp;
  cardElements.minTemps[index].innerText = data.min_temp;
  cardElements.humidityDisplays[index].innerText = data.humidity;
};

// 2. For cards for days2 - 5
// const otherDataCard = (data) => {
//   let divCard = [...document.getElementsByClassName("next-weather-card")];
//   // 1. Iterate thru each div.card, forEach(div, i)
//   divCard.forEach((div, i) => {
//     // 2. For p.next-dates innertext is data[i].created

//     // 3. For div.next-weather img the src for img is related to dat[i].weather_state_abbr
//     // 4. For div.next-weather h3 innertext is data[i].the_temp
//     // 5. next-li-maxtemp innertext will be data[i].max_temp
//     // 6. next-li-min-temp innerText will be data[i].min_temp
//     // 7. next-li-humidity innerText will be data[i].humidity
//   });
// }

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
};