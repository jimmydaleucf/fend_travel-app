const countdown = (dateDiff, destination) => {//determines verbiage and inserts correct countdown sentence into the UI. 
  if (dateDiff == 1) {
    document.getElementById("countdown").innerText =
      dateDiff + ` day until your trip to ${destination}!`;
  } else if (dateDiff > 1) {
    document.getElementById("countdown").innerText =
      dateDiff + ` days until your trip to ${destination}!`;
  } else if (dateDiff == 0) {
    document.getElementById(
      "countdown"
    ).innerText = `You leave for ${destination} today!`;
  } else {//for dates that are in the past
    document.getElementById("countdown").innerText = "";
  }
};
export {countdown}