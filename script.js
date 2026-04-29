// script.js
document.addEventListener("DOMContentLoaded", () => {

const data = {

mobiles: [
["iPhone 15","Apple flagship"],
["Samsung S24","Android premium"],
["OnePlus 12","Fast performance"],
["Pixel 9","Pure Android"],
["Xiaomi 14","Best value"],
["Nothing Phone","Unique design"],
["Moto Edge","Clean Android"],
["Vivo X100","Camera phone"],
["Oppo Reno","Stylish look"],
["Realme GT","Gaming ready"]
],

laptops: [
["MacBook Pro","Powerful laptop"],
["Dell XPS","Premium build"],
["HP Pavilion","Office laptop"],
["Lenovo Legion","Gaming laptop"],
["Acer Aspire","Daily use"],
["Asus Zenbook","Slim design"],
["Surface Laptop","Elegant style"],
["ThinkPad X1","Business use"],
["MSI Stealth","High graphics"],
["LG Gram","Ultra light"]
],

fashion: [
["T-Shirt","Modern style"],
["Jeans","Slim fit"],
["Sneakers","Trending shoes"],
["Hoodie","Casual wear"],
["Watch","Premium look"],
["Shirt","Formal wear"],
["Cap","Street style"],
["Jacket","Winter style"],
["Kurta","Traditional wear"],
["Sunglasses","Summer vibe"]
],

audio: [
["AirPods","Wireless earbuds"],
["Sony XM5","Noise canceling"],
["JBL Flip","Portable speaker"],
["Boat Rockerz","Budget headset"],
["Mic","Studio mic"],
["Soundbar","TV audio"],
["Home Theatre","Cinema sound"],
["Earphones","Wired sound"],
["Neckband","Daily music"],
["Bluetooth Speaker","Party bass"]
],

gaming: [
["PS5","Next gen console"],
["Xbox X","Gaming power"],
["Gaming Mouse","Fast clicks"],
["Mechanical Keyboard","RGB keys"],
["VR Headset","Virtual gaming"],
["Gaming Chair","Comfort setup"],
["144Hz Monitor","Smooth display"],
["Controller","Wireless play"],
["Gaming Laptop","Portable power"],
["Racing Wheel","Driving sim"]
]

};

const categories = document.querySelectorAll(".cat");
const products = document.getElementById("products");
const sectionTitle = document.getElementById("sectionTitle");
const countText = document.getElementById("countText");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

function loadCategory(el, category){

categories.forEach(cat => cat.classList.remove("active"));
el.classList.add("active");

el.scrollIntoView({
behavior: "smooth",
inline: "center",
block: "nearest"
});

sectionTitle.textContent = el.textContent;
countText.textContent = data[category].length + " Products";

let html = "";

data[category].forEach(item => {
html += `
<div class="card">
<h3>${item[0]}</h3>
<p>${item[1]}</p>
</div>
`;
});

products.innerHTML = html;

searchItems();
}

function searchItems(){
const input = searchInput.value.toLowerCase();
const cards = document.querySelectorAll(".card");
let visible = 0;

cards.forEach(card => {
const show = card.innerText.toLowerCase().includes(input);
card.style.display = show ? "block" : "none";
if(show) visible++;
});

countText.textContent = visible + " Products";
}

function clearSearch(){
searchInput.value = "";
searchItems();
searchInput.focus();
}

categories.forEach(cat => {
cat.addEventListener("click", () => {
loadCategory(cat, cat.dataset.category);
});
});

searchInput.addEventListener("keyup", searchItems);
clearBtn.addEventListener("click", clearSearch);

loadCategory(document.querySelector(".cat.active"), "mobiles");

});
