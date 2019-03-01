import fetchCity from './fetchCity';

const fetchCityData = (city) => {
  // Based on input city -> toLowerCase first
  let woeid;
  console.log(city.toLowerCase());
  const url = `https://www.metaweather.com/api/location/search/?query=${city.toLowerCase()}`;
  fetch(url, {
      mode: "cors",
    })
    .then((data) => {
      return data.json();
    })
    .then(data => {
      woeid = data[0].woeid;
      // console.log(data[0].woeid)
    });
  console.log("WOEID:", woeid);
};

export default fetchCityData;