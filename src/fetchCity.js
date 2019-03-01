async function fetchCity(city) {
  const yacdn = `https://yacdn.org/proxy/`
  const url = `${yacdn}https://www.metaweather.com/api/location/search/?query=${city.toLowerCase()}`;

  const data = await fetch(url).then(data => data.json());
  console.log(data[0].woeid);
  return data[0].woeid;
}

export default fetchCity;