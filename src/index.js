import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import fetchCityData from './fetchCityData';


// Use data generated (weather object containing all properties we need) by fetchCityData and place them in their resp DOM elements
fetchCityData("Dhaka");