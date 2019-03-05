import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import {
  loading,
  submitCallback,
} from './domHelpers';

const constants = require('./constants');

constants.weatherSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Show fetching weather data text
  loading(constants.loadingDiv);
  // Parameters passed to callback
  const submitCallbackParams = [
    constants.mainDataRow,
    constants.cityNameDisplay,
    constants.cityNameInput,
    constants.locationSearchUrl,
    constants.weatherSearchUrl,
    "woeid",
    constants.corsProxyUrl,
    constants.errorDiv,
    constants.loadingDiv,
  ];

  submitCallback(submitCallbackParams);
  // Remove input text from form
  e.target.reset();
});