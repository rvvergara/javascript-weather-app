import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import {
  loading,
  submitCallback,
} from './domHelpers';

import elements from './elements';

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