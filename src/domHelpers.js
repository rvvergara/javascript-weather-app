const showData = (dataArr) => {
  // Generate dynamic HTML for big card
  // Assign dataObj elements in DOM
  weatherTodayCard(dataArr[0], dataArr[5]);
  dataArr.slice(1).forEach((data) => {
    otherDataCard(data);
  });
};

// We need a function that generates the html structure for the data

// 1. For the big card
const weatherTodayCard = (data, city) => {
  // We need to extract elements from data that we need
  const {
    weather_state_abbr,
    the_temp,
    min_temp,
    max_temp,
    humidity,
    created,
  } = data;
  document.getElementsByTagName("img")[0].setAttribute("src", `https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`);

  const todayTemp = document.getElementById("todayTemp");


  todayTemp.innerText = the_temp;

  const cityName = document.getElementById("cityName");

  cityName.innerText = city;

  const todayDate = document.getElementById("today-date");

  todayDate.innerText = parseDate(new Date(created));

  const todayLis = [...document.getElementsByClassName("todayLi")];

  [max_temp, min_temp, humidity].forEach((data, i) => todayLis[i].innerText = data);
};

// 2. For cards for days2 - 5
const otherDataCard = (data) => {
  let divCard = [...document.getElementsByClassName("next-weather-card")];
  // 1. Iterate thru each div.card, forEach(div, i)
  divCard.forEach((div, i) => {
    // 2. For p.next-dates innertext is data[i].created

    // 3. For div.next-weather img the src for img is related to dat[i].weather_state_abbr
    // 4. For div.next-weather h3 innertext is data[i].the_temp
    // 5. next-li-maxtemp innertext will be data[i].max_temp
    // 6. next-li-min-temp innerText will be data[i].min_temp
    // 7. next-li-humidity innerText will be data[i].humidity
  });
}

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