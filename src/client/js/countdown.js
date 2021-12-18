const countdown = (dateDiff) => {
  if (dateDiff == 1) {
    document.getElementById("countdown").innerText =
      dateDiff + " day until your trip!";
  } else if (dateDiff > 1) {
    document.getElementById("countdown").innerText =
      dateDiff + " days until your trip!";
  } else if ((dateDiff == 0)) {
    document.getElementById("countdown").innerText = "Your Trip is today!";
  } else {
    document.getElementById("countdown").innerText = "";
  }
};
export {countdown}