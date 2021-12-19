const updateUI = async (url = "", image_url) => {
  const request = await fetch("http://localhost:8081/all");
  try {
    const allData = await request.json();
    console.log(allData);
    // const image_url= image.hits[0].pageURL;
    // console.log(image_url);
    // document.getElementById("image").innerHTML="<img src=\""
    document.getElementById("weather").innerText = allData.description;
    document.getElementById("temp").innerText = allData.temp + "°F";
    document.getElementById("weather-card").className="container";
    document.getElementById("results-wrapper").className="container";

    const icon = allData.icon;
    document.getElementById(
      "icon"
    ).innerHTML = `<img src=\"src/client/media/icons/${icon}.png\" height= \"90\" width=\"90\">`;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI}