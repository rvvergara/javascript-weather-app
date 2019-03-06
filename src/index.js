import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import {
  loading,
  submitCallback,
  tempDisplays,
} from './domHelpers';

import elements from './elements';

elements.weatherSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Updated");
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
    "tempUnitC",
  ];

  submitCallback(submitCallbackParams);
  // Remove input text from form
  e.target.reset();
});

elements.tempRadioBtns.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    e.stopPropagation();
    elements.tempToggle();
    elements.fetchedWeatherSet().forEach((data, index) => tempDisplays(data, elements, index, elements.tempUnitC));
  });
});