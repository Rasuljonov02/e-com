import axios from "axios";

const oq: HTMLParagraphElement = document.querySelector(".oq")!;
const producktsoni: HTMLParagraphElement = document.querySelector(".producktsoni")!;
const ong: HTMLDListElement = document.querySelector(".ong")!;

let responseData: any = null;

const URL = "https://course-api.com/react-store-products";

async function fetchData() {
  try {
    const response = await axios.get(URL);
    responseData = response.data;
    renderikitalik(responseData);
    console.log(responseData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function renderikitalik(data: any) {
  ong.innerHTML = "";
  data.forEach((element: any, i: number) => {
    const divelem: HTMLDivElement = document.createElement("div");
    const img: HTMLImageElement = document.createElement("img");
    const span: HTMLSpanElement = document.createElement("span");
    const h4: HTMLParagraphElement = document.createElement("h4");
    const h44: HTMLParagraphElement = document.createElement("h4");
    const description: HTMLParagraphElement = document.createElement("p"); // Use paragraph for description

    producktsoni.innerText = `${i} Products Found`;
    description.innerText = `${element.description}`;
    description.className="description"
    h44.className = "summa";
    h4.innerText = `${element.name}`;
    h4.className = "useName";
    h44.innerText = `$${element.price}`;
    divelem.className = "orav";
    img.src = `${element.image}`;
    img.className = "img1";
    span.className = "span1";
    ong.className="ong1"
    ong.appendChild(divelem);
    divelem.appendChild(img);
    divelem.appendChild(span);
    span.appendChild(h4);
    span.appendChild(h44);
    span.appendChild(description);
  });
}

oq.addEventListener("click", () => {
  if (responseData) {
    renderikitalik(responseData);
  } else {
    fetchData();
  }
});


fetchData();
