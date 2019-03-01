import fetchCity from './fetchCity';

async function fetchCityData(city) {
  const woeid = fetchCity(city);
  console.log(woeid);

}
export default fetchCityData;