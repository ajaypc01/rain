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

/* CATEGORY LOAD */
function loadCategory(el, category){

categories.forEach(cat => cat.classList.remove("active"));
el.classList.add("active");

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

/* SEARCH */
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

/* EVENTS */
categories.forEach(cat => {
cat.addEventListener("click", () => {
const selected = cat.dataset.category;

/* ✅ SAVE CATEGORY */
localStorage.setItem("selectedCategory", selected);

loadCategory(cat, selected);
});
});

searchInput.addEventListener("keyup", () => {

/* ✅ SAVE SEARCH */
localStorage.setItem("searchText", searchInput.value);

searchItems();
});

/* ✅ INITIAL LOAD */
const savedCategory = localStorage.getItem("selectedCategory");
const savedSearch = localStorage.getItem("searchText");

if(savedSearch){
searchInput.value = savedSearch;
}

if(savedCategory){
const activeCat = document.querySelector(`.cat[data-category="${savedCategory}"]`);
if(activeCat){
loadCategory(activeCat, savedCategory);
} else {
loadCategory(document.querySelector(".cat.active"), "mobiles");
}
} else {
loadCategory(document.querySelector(".cat.active"), "mobiles");
}

});


// /* MENU TOGGLE */
/* ===== HEADER SEARCH ===== */
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");
const menuBtn = document.getElementById("menuBtn");

/* ACTIVATE SEARCH */
function activateSearch(){
  searchBar.classList.add("active");
  searchInput.focus();
}

/* CLICK ON BAR (except menu button) */
searchBar.addEventListener("click", (e) => {
  if(e.target.id !== "menuBtn"){
    activateSearch();
  }
});

/* SEARCH ICON */
searchIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  activateSearch();
});

/* PREVENT MENU CLICK FROM TRIGGERING SEARCH */
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* CLICK OUTSIDE */
document.addEventListener("click", (e) => {
  if(!searchBar.contains(e.target)){
    searchBar.classList.remove("active");
  }
});


/* ===== MENU TOGGLE (CLEAN VERSION) ===== */
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

/* OPEN MENU */
menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

/* CLOSE MENU */
function closeMenuFunc(){
  menu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeMenu.addEventListener("click", closeMenuFunc);
overlay.addEventListener("click", closeMenuFunc);
