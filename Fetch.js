const url = "https://www.course-api.com/react-tours-projects";

const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("fetch unsucessfull!");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", getData);
