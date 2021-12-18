const updateUI = async (url = "") => {
  const request = await fetch("http://localhost:8081/all");
  try {
    const allData = await request.json();
    console.log(allData);
   
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI}