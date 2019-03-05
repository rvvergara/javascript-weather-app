import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import {
  fetchCityData,
  loading,
} from './domHelpers';

const cityNameInput = document.getElementById("cityNameInput");

const cityNameDisplay = document.getElementById('city-name');

const mainDataRow = document.getElementsByClassName("row")[0];

const [weatherSearchUrl, locationSearchUrl] = ["https://www.metaweather.com/api/location/", "https://www.metaweather.com/api/location/search/?query="];

const corsProxyUrl = `https://yacdn.org/proxy/`;

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  loading();
  submitCallback(mainDataRow, cityNameDisplay, cityNameInput);
  e.target.reset();
});

const submitCallback = (row, cityDisplay, input) => {
  // Make row invisible again
  row.classList.add("invisible");
  // Remove animate class animate if any
  row.classList.remove("animate");
  // If there are any error messages visible just add class d-none to it
  document.getElementById('error').setAttribute("class", 'd-none');
  const cityName = input.value;
  fetchCityData(locationSearchUrl, weatherSearchUrl, cityName, "woeid", corsProxyUrl, row, cityDisplay);
}