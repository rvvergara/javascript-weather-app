import {
  loading,
} from './domHelpers';

async function fetchCity(city) {
  const yacdn = `https://yacdn.org/proxy/`;
  const url = `${yacdn}https://www.metaweather.com/api/location/search/?query=${city.toLowerCase()}`;

  const data = await fetch(url).then((result) => {
    loading();
    return result.json();
  });
  return data[0].woeid;
}

export default fetchCity;