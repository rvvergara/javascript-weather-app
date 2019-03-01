import fetchCity from './fetchCity';
import {
  showData,
} from './domHelpers';

async function fetchCityData(city) {
  const yacdn = `https://yacdn.org/proxy/`;
  const woeid = await fetchCity(city);
  const url = `${yacdn}https://www.metaweather.com/api/location/${woeid}`;

  const data = await fetch(url).then(res => res.json());

  const {
    weather_state_abbr,
    created,
    max_temp,
    min_temp,
    humidity,
  } = data.consolidated_weather[0];

  showData({
    weather_state_abbr,
    created,
    max_temp,
    min_temp,
    humidity,
  });
}

export default fetchCityData;