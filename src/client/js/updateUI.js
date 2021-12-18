const updateUI = async (url = "") => {
  const request = await fetch("http://localhost:8081/all");
  try {
    const allData = await request.json();
    document.getElementById("weather").innerText= allData.description;
    document.getElementById("temp").innerText= allData.temp + "°F";
    const icon = allData.icon;
    document.getElementById("icon").innerHTML =
      `<img src=\"src/client/media/icons/${icon}.png\" height= \"90\" width=\"90\">`
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI}