import axios from "axios";
import "./main.css";
import "./ikitalik";

const ong: HTMLDListElement = document.querySelector(".ong")!;
const category: NodeListOf<HTMLDivElement> = document.querySelectorAll("#category")!;
const producktsoni: HTMLParagraphElement = document.querySelector(".producktsoni")!;
const URL = "https://course-api.com/react-store-products";

async function fetchDataAndUpdate() {
	try {
		const response = await axios.get(URL);
		renderData(response.data);
		categ(response.data);
		console.log(response.data);
	} catch (error) {
		console.error("Error fetching data:", error.message);
	}
}

function renderData(data: any) {
	data.forEach((element: any, i: number) => {
		const divelem: HTMLDivElement = document.createElement("div");
		const img: HTMLImageElement = document.createElement("img");
		const span: HTMLSpanElement = document.createElement("span");
		const h4: HTMLParagraphElement = document.createElement("h4");
		const h44: HTMLParagraphElement = document.createElement("h4");
		producktsoni.innerText = `${i} Products Found`;

		h44.className = "h44";
		h4.innerText = `${element.name}`;
		h4.className = "h4";
		h44.innerText = `$${element.price}`;
		divelem.className = "urlImg";
		img.src = `${element.image}`;
		img.className = "img";
		ong.className = "ong";
		span.className = "span";
		ong.appendChild(divelem);
		divelem.appendChild(img);
		divelem.appendChild(span);
		span.appendChild(h4);
		span.appendChild(h44);
	});
}

console.log(category);

function rende() {
	for (let i = 0; i < 40; i++) {
		const divelem: HTMLDivElement = document.createElement("div");
		divelem.className = "loader urlImg";
		ong.appendChild(divelem);
	}
}

const qora: HTMLParagraphElement = document.querySelector(".qora")!;
qora.addEventListener("click", () => {

		ong.innerHTML = "";
		fetchDataAndUpdate();

});

setTimeout(() => {
	ong.innerHTML = "";
	fetchDataAndUpdate();
}, 4000);

let a: string[] = ["office", "living room", "kitchen", "bedroom", "dining", "kids"];

// kategory lar
function categ(data: any) {
	som(data);
	category.forEach((da: any, i) => {
		da.addEventListener("click", () => {
			ong.innerHTML = "";
			console.log(da, i);

			const selectedCategory = da.textContent.trim().toLowerCase();

			data.forEach((cat: any) => {

				if (cat.category.toLowerCase() === selectedCategory || selectedCategory === "all") {
					const divelem: HTMLDivElement = document.createElement("div");
					const img: HTMLImageElement = document.createElement("img");
					const span: HTMLSpanElement = document.createElement("span");
					const h4: HTMLParagraphElement = document.createElement("h4");
					const h44: HTMLParagraphElement = document.createElement("h4");

					h44.className = "h44";
					h4.innerText = `${cat.name}`;
					h4.className = "h4";
					h44.innerText = `$${cat.price}`;
					divelem.className = "urlImg";
					img.src = `${cat.image}`;
					img.className = "img";
					ong.className = "ong";
					span.className = "span";
					ong.appendChild(divelem);
					divelem.appendChild(img);
					divelem.appendChild(span);
					span.appendChild(h4);
					span.appendChild(h44);
				}
			});

			da.classList.toggle("activ");

			category.forEach((element, index) => {
				if (i !== index) {
					element.classList.remove("activ");
				}
			});
		});
	});
}

const rangeInput:HTMLInputElement = document.querySelector('.vales')!;
const pelement:HTMLParagraphElement = document.querySelector('#selectedPrice')!;
rangeInput.addEventListener('input', amaki);
let sega:any;

function amaki() {
		sega = rangeInput.value;

		pelement.textContent = `Selected Price:  $${sega }`;

	}
	console.log(sega);

function som(data: any) {
	data.forEach((a: { name: any; price: any; image: any; }) => {
			if (a.price <= sega) {
					const divelem: HTMLDivElement = document.createElement("div");
					const img: HTMLImageElement = document.createElement("img");
					const span: HTMLSpanElement = document.createElement("span");
					const h4: HTMLParagraphElement = document.createElement("h4");
					const h44: HTMLParagraphElement = document.createElement("h4");

					h44.className = "h44";
					h4.innerText = `${a.name}`;
					h4.className = "h4";
					h44.innerText = `$${a.price}`;
					divelem.className = "urlImg";
					img.src = `${a.image}`;
					img.className = "img";
					ong.className = "ong";
					span.className = "span";
					ong.appendChild(divelem);
					divelem.appendChild(img);
					divelem.appendChild(span);
					span.appendChild(h4);
					span.appendChild(h44);
			}
	});
}
