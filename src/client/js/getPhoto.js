let pixURL= "https://pixabay.com/api/?key="
const pixabay_key= "24887647-41a0d54ffd7c876db41d2b5f2";


const shortDest = (destination)=>{
    console.log(destination);
    const pic_destination = destination.replace(/\s+/g, "");
    console.log(pic_destination);
    return pic_destination;
};




const getPhoto = async(pic_destination, pixURL, pixabay_key)=> {
  console.log(pic_destination);
  const pic_response = await fetch(
    pixURL + pixabay_key + "&q=" + `${pic_destination}`
  );
try {
    const data = await pic_response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export {shortDest, getPhoto}