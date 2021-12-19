import { processInfo } from "./js/app.js";
import { calcDate } from "./js/calculateDate.js";
import { getCurrentWeather, getFutureWeather } from "./js/weatherApiCalls.js";
import { postData } from "./js/postData.js";
import { getCityCoords } from "./js/getCoords.js";
import { updateUI } from "./js/updateUI.js";
import { countdown } from "./js/countdown.js";
import { getPhoto, shortDest } from "./js/getPhoto.js";

document.getElementById("submit").addEventListener("click", processInfo);


import './styles/main.scss'
import'./styles/fonts.scss'


export {
  processInfo,
  calcDate,
  getFutureWeather,
  getCurrentWeather,
  postData,
  getCityCoords,
  updateUI,
  countdown,
  getPhoto,
  shortDest,
};
