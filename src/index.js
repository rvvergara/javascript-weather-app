import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import {
  loading,
  submitCallback,
  tempDisplays,
} from './domHelpers';

import {
  elements,
  displayElements,
} from './elements';


elements.weatherSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Show fetching weather data text
  loading(elements.loadingDiv);
  // Parameters passed to callback
  const submitCallbackParams = [
    elements.mainDataRow,
    elements.cityNameDisplay,
    elements.cityNameInput,
    elements.locationSearchUrl,
    elements.weatherSearchUrl,
    "woeid",
    elements.corsProxyUrl,
    elements.errorDiv,
    elements.loadingDiv,
  ];

  submitCallback(submitCallbackParams);
  // Remove input text from form
  e.target.reset();
});

elements.tempRadioBtns.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    e.stopPropagation();
    elements.tempUnitC = !elements.tempUnitC;
    elements.fetchedWeatherData.forEach((data, index) => tempDisplays(data, displayElements, index));
  });
});