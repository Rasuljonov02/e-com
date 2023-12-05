import axios from "axios";
import "./main.css";
import "./ikitalik";
import { fetchData } from "./ikitalik";

const ong: HTMLDListElement = document.querySelector(".ong")!;
const category: NodeListOf<HTMLDivElement> = document.querySelectorAll("#category")!;
const producktsoni: HTMLParagraphElement = document.querySelector(".producktsoni")!;
const eroe404: HTMLDivElement = document.querySelector(".conterner5")!;
const contener: HTMLDivElement = document.querySelector(".conterner")!;

const URL = "https://course-api.com/react-store-products";
let o: any;
async function fetchDataAndUpdate() {
	try {
		const response = await axios.get(URL);
		renderData(response.data);
		categ(response.data);
		console.log(response.data);
	} catch (error) {
		eroe404.style.display = "block";
		contener.style.display = "none";
		console.error("Error fetching data:");
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

		divelem.addEventListener("click", () => {
			elemUshlash(element, divelem);
		});
	});
}
const chap: HTMLDivElement = document.querySelector(".chap")!;

function elemUshlash(params: any, box: HTMLDivElement) {
	console.log(params, box);
	ong.innerHTML = "";
	chap.style.display = "none";
	ong.innerHTML = `		<div class="kattaMalum">
<p class="nazat">BACK TO PRODUCTS</p>
<div class="box0">
	<img class="karimg" src="${params.image}" alt="">
	<span class="sapn3">
		<h2 class="ism">${params.name}</h2>
		<h3 class="narh"> $${params.price}</h3>
		<h3 class="parag">${params.description}</h3>
		<h3 class="avail">Available : In Stock</h3>
		<h3 class="sku">SKU : ${params.id}</h3>
		<h3 class="brand">Brand : ${params.company}</h3>
	</span>
</div>
</div>`;
	const nazat: HTMLParagraphElement = document.querySelector(".nazat")!;

	nazat.addEventListener("click", () => {
		location.reload();

		console.log("Nazat element clicked");
		ong.innerHTML = "";
		fetchDataAndUpdate();
		chap.style.display = "flex";
	});
}

console.log(category);

const qora: HTMLParagraphElement = document.querySelector(".qora")!;
qora.addEventListener("click", () => {
	ong.innerHTML = "";
	fetchDataAndUpdate();
});

ong.innerHTML = "";
fetchDataAndUpdate();

let a: string[] = ["office", "living room", "kitchen", "bedroom", "dining", "kids"];

// kategory lar
function categ(data: any) {
	if (!data) {
		console.error("data xato");
		return;
	}

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
					divelem.addEventListener("click", () => {
						elemUshlash(cat, divelem);
					});
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

const rangeInput: HTMLInputElement = document.querySelector(".vales")!;
const pelement: HTMLParagraphElement = document.querySelector("#selectedPrice")!;
rangeInput.addEventListener("input", amaki);
let sega: any;

function amaki() {
	sega = rangeInput.value;

	pelement.textContent = `Selected Price:  $${sega}`;
}
console.log(sega);

function som(data: any) {
	data.forEach((a: { name: any; price: any; image: any }) => {
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

const oq: HTMLParagraphElement = document.querySelector(".oq")!;

oq.addEventListener("click", () => {
	fetchData();
});
