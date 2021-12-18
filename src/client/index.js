import { processInfo } from "./js/app.js";
import { calcDate } from "./js/calculateDate.js";
import { getCurrentWeather, getFutureWeather } from "./js/weatherApiCalls";

// console.log(testFuntion)
// alert('HELLO WORLD')
document.getElementById("submit").addEventListener("click", processInfo);


import './styles/main.scss'
import'./styles/fonts.scss'

// document.getElementById("submit").addEventListener("click", processInfo);

export { processInfo, calcDate, getFutureWeather, getCurrentWeather}
