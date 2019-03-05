import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import {
  fetchCityData,
  loading,
} from './domHelpers';

const [weatherSearchUrl, locationSearchUrl] = ["https://www.metaweather.com/api/location/", "https://www.metaweather.com/api/location/search/?query="];

const corsProxyUrl = `https://yacdn.org/proxy/`;

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  loading();
  const mainDataRow = document.getElementsByClassName("row")[0];
  // Make row invisible again
  mainDataRow.classList.add("invisible");
  // Remove animate class animate if any
  if ([...mainDataRow.classList].includes("animate")) mainDataRow.classList.remove("animate");
  // If there are any error messages visible just add class d-none to it
  document.getElementById('error').setAttribute("class", 'd-none');
  const cityName = document.getElementById("cityNameInput").value;
  fetchCityData(locationSearchUrl, weatherSearchUrl, cityName, "woeid", corsProxyUrl);
  e.target.reset();
});