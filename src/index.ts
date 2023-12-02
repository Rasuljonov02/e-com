import axios from "axios";
import "./main.css";
const ong: HTMLDListElement = document.querySelector(".ong")!;
const category: NodeListOf<HTMLDivElement> = document.querySelectorAll("#category")!;
const producktsoni:HTMLParagraphElement=document.querySelector(".producktsoni")!;
const URL = "https://course-api.com/react-store-products";

async function fetchData() {
	try {
		const response = await axios.get(URL);
		renderData(response.data);
		console.log(response.data);
	} catch (error) {
		console.error("Error fetching data:", error.message);
	}
}

function renderData(data: any) {
	data.forEach((element: any,i:number) => {
		const divelem: HTMLDivElement = document.createElement("div");
		const img: HTMLImageElement = document.createElement("img");
		const span: HTMLSpanElement = document.createElement("span");
		const h4: HTMLParagraphElement = document.createElement("h4");
		const h44: HTMLParagraphElement = document.createElement("h4");
		producktsoni.innerText=`${i } Products Found`;

		h44.className = "h44";
		h4.innerText = `${element.name}`;
		h4.className = "h4";
		h44.innerText = `$${element.price}`;
		divelem.className = "urlImg";
		img.src = `${element.image}`;
		img.className = "img";
		span.className = "span";
		ong.appendChild(divelem);
		divelem.appendChild(img);
		divelem.appendChild(span);
		span.appendChild(h4);
		span.appendChild(h44);
	});
}

console.log(category);

category.forEach((da, i) => {
	da.addEventListener("click", () => {
		console.log(da);

		da.classList.toggle("activ");

		category.forEach((element, index) => {
			if (i !== index) {
				element.classList.remove("activ");
			}
		});
	});
});

function rende() {
	for (let i = 0; i < 40; i++) {
			const divelem: HTMLDivElement = document.createElement("div");
			divelem.className = "loader urlImg";
			ong.appendChild(divelem);
	}
}

rende();
setTimeout(() => {
	ong.innerHTML = "";
	fetchData();
}, 4000);
