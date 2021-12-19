const getPhoto = async(url="")=> {
  const pic_response = await fetch(
    "http://localhost:8081/image"
  );
try {
    const image = await pic_response.json();
    console.log(image);
    const image_url = image.hits[0].webformatURL;
    console.log(image_url);
    document.getElementById("dest-image").src = image_url;//updates img src in DOM
    document.getElementById("attribution").innerText ="Images provide by Pixabay.com";//adds attribution for pics used
    document.getElementById("dest-image").className ="container"// adds container class to the element so it has the "card look"

    return image_url;
  } catch (error) {
    console.log("error", error);
  }
};

export {getPhoto}