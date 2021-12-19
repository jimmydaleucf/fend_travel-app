const countdown = (dateDiff, destination) => {
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
  } else {
    document.getElementById("countdown").innerText = "";
  }
};
export {countdown}