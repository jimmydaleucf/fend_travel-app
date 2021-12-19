const getPhoto = async(url="")=> {
  const pic_response = await fetch(
    "http://localhost:8081/image"
  );
try {
    const image = await pic_response.json();
    console.log(image);
    const image_url = image.hits[0].webformatURL;
    console.log(image_url);
    document.getElementById("dest-image").src = image_url;

    return image_url;
  } catch (error) {
    console.log("error", error);
  }
};

export {getPhoto}