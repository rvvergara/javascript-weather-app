import fetchCity from './fetchCity';
import {
  showData,
} from './domHelpers';

async function fetchCityData(locationSearchUrl, weatherFetchUrl, city, property) {
  const yacdn = `https://yacdn.org/proxy/`;
  const woeid = await fetchCity(locationSearchUrl, city, property);
  const url = `${yacdn}${weatherFetchUrl}${woeid}`;

  try {
    if (document.getElementsByClassName("animate").length > 0) {
      document.getElementsByClassName("animate")[0].classList.remove("animate");
    }

    const data = await fetch(url).then((res) => {
      document.getElementById("loading").setAttribute("class", "hidden");

      if (document.getElementsByClassName("invisible").length > 0) {
        document.getElementsByClassName("invisible")[0].classList.remove("invisible");
      }

      document.getElementsByClassName("row")[0].classList.add("animate");

      return res.json();
    });

    // const [weatherToday, day2, day3, day4, day5] = data.consolidated_weather

    showData([data.title, data.consolidated_weather.slice(0, 5)]);
  } catch (error) {
    displayErrorMsg();
  }

}

const displayErrorMsg = () => {
  document.getElementsByClassName('row')[0].classList.add('invisible');
  document.getElementById('loading').classList.add('hidden');
  document.getElementById('error').classList.remove('d-none');
}

export default fetchCityData;