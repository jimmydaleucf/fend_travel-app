const updateUI = async (url = "", image_url) => {
  const request = await fetch("http://localhost:8081/all");
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("weather").innerText = allData.description; //adds weather description to UI
    document.getElementById("temp").innerText = allData.temp + "°F"; //adds temp data to UI
    document.getElementById("weather-card").className = "container"; //changes class of card to container for that "card look"
    document.getElementById("results-wrapper").className = "container"; //changes class of card to container for that "card look"
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI}