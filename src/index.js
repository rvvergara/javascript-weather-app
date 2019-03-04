import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import fetchCityData from './fetchCityData';

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = document.getElementById("cityNameInput").value;
  fetchCityData(cityName);
  // Remove invisible class
  e.target.reset();
});