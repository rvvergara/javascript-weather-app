import fetchCity from './fetchCity';
import {
  showData,
} from './domHelpers';

async function fetchCityData(city) {
  const [woeid, yacdn, url] = [await fetchCity(city),
    `https://yacdn.org/proxy/`,
    `${yacdn}https://www.metaweather.com/api/location/${woeid}`,
  ];

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

export default fetchCityData;