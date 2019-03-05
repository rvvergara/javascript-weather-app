import {
  loading,
} from './domHelpers';

async function fetchCity(baseUrl, city, property) {
  const yacdn = `https://yacdn.org/proxy/`;
  const url = `${yacdn}${baseUrl}${city.toLowerCase()}`;

  const data = await fetch(url).then((result) => {
    loading();
    return result.json();
  });
  if (data[0] !== undefined) return data[0][property];
}

export default fetchCity;