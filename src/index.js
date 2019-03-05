import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import {
  loading,
  submitCallback,
} from './domHelpers';

const cityNameInput = document.getElementById("cityNameInput");

const weatherSearchForm = document.getElementsByTagName("form")[0];

const errorDiv = document.getElementById('error');

const cityNameDisplay = document.getElementById('city-name');

const mainDataRow = document.getElementsByClassName("row")[0];

const [weatherSearchUrl, locationSearchUrl] = ["https://www.metaweather.com/api/location/", "https://www.metaweather.com/api/location/search/?query="];

const corsProxyUrl = `https://yacdn.org/proxy/`;

weatherSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Show fetching weather data text
  loading();
  // Parameters passed to callback
  const submitCallbackParams = [
    mainDataRow,
    cityNameDisplay,
    cityNameInput,
    locationSearchUrl,
    weatherSearchUrl,
    "woeid",
    corsProxyUrl,
    errorDiv
  ];

  submitCallback(submitCallbackParams);
  // Remove input text from form
  e.target.reset();
});