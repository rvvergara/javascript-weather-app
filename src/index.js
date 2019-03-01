import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import fetchCityData from './fetchCityData';

// fetchCityData("Dhaka");

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const cityName = document.getElementsByTagName("input")[0].value;
  fetchCityData(cityName);
  e.target.reset();
});