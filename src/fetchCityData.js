import fetchCity from './fetchCity';

async function fetchCityData(city) {
  const woeid = await fetchCity(city),
    yacdn = `https://yacdn.org/proxy/`,
    url = `${yacdn}https://www.metaweather.com/api/location/${woeid}`;

  const data = await fetch(url).then(res => res.json());

  const {
    weather_state_name,
    created,
    max_temp,
    min_temp,
    humidity,
  } = data.consolidated_weather[0];

  showData({
    weather_state_name,
    created,
    max_temp,
    min_temp,
    humidity,
  });

}

function showData(dataObj) {
  // Assign dataObj elements in DOM
  const ul = document.getElementsByTagName("ul")[0];
  const weather = [];
  for (let data in dataObj) {
    weather.push(dataObj[data]);
  }

}


export default fetchCityData;