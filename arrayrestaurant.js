"use strict";

let restaurants = [
  {
    name: "Applebee's",
    cuisine: "American",
    location: "US",
    rating: 4.4,
    owner: "Dine Brands Global Inc."
  },
{
    name: "Dooky Chase",
    cuisine: "Southern/Creole",
    location: "New Orleans",
    rating: 5,
    owner: ["Edgar 'Dooky' Chase IV", "Leah Chase (deceased)", "Edgar 'Dooky' Chase, Jr. (deceased)"]
  },
  {
    name: "Chinese Kitchen-Carrollton",
    cuisine: "Chinese",
    location: "Uptown New Orleans",
    rating: 4,
    owner: "David K Tsang"
  },

];

function render(restArray) {
  let section = document.getElementById("Myrestaurants");

  for (let i = 0; i < restArray.length; i++) {
    let ownerText = Array.isArray(restArray[i].owner) ? restArray[i].owner.join(', ') : restArray[i].owner;

    let bootstrapCard = `

    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${restArray[i].name}</h5>
    <p class="card-text">${restArray[i].cuisine}</p>
    <p class="card-text">${restArray[i].location}</p>
    <p class="card-text">${restArray[i].rating}</p>
    <p class="card-text">${ownerText}</p>
    
  </div>
</div>`;

    section.innerHTML += bootstrapCard;
  }
}

render(restaurants);
