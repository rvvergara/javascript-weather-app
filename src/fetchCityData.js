import fetchCity from './fetchCity';
import {
  showData,
} from './domHelpers';

async function fetchCityData(city) {
  const yacdn = `https://yacdn.org/proxy/`;
  const woeid = await fetchCity(city);
  const url = `${yacdn}https://www.metaweather.com/api/location/${woeid}`;

  const data = await fetch(url).then((res) => {
    document.getElementById("loading").setAttribute("class", "d-none");
    return res.json();
  });

  const [weatherToday, day2, day3, day4, day5] = data.consolidated_weather

  showData([weatherToday, day2, day3, day4, day5, data.title]);
}

export default fetchCityData;