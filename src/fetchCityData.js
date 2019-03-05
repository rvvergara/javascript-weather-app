import fetchCity from './fetchCity';
import {
  showData,
} from './domHelpers';

const fetchData = async (city, locationSearchUrl, weatherFetchUrl, property, proxyUrl) => {
  // Fetch city
  const woeid = fetch(proxyUrl + locationSearchUrl + city).then(data => data.json());

  const weatherData = await woeid.then(d => fetch(proxyUrl + weatherFetchUrl + d[0].woeid)).then(d => d.json());

  // Return an object containing all the necessary data for display
  return weatherData;
};


async function fetchCityData(locationSearchUrl, weatherFetchUrl, city, property, proxyUrl) {
  // Fetch city
  fetchData(city, locationSearchUrl, weatherFetchUrl, property, proxyUrl).then(data => showData([data.title, data.consolidated_weather.slice(0, 5)]));
};

const displayErrorMsg = () => {
  document.getElementsByClassName('row')[0].classList.add('invisible');
  document.getElementById('loading').classList.add('hidden');
  document.getElementById('error').classList.remove('d-none');
}

export default fetchCityData;