"use strict";

let products = [
  {
    name: "Hyper Tough 1.5 Gallon 2 Peak Wet/Dry Vac",
    category: "vacuum cleaner",
    price: "$28.68",
    inStock: true,
    stockStore: "WalMart",
  },
  {
    name: "Embark-Office Chair Bonded Leather Black",
    category: "Office Furniture",
    price: "$75.00",
    inStock: false,
    stockStore: "Target",
  },
  {
    name: "Cricut Glue Gun",
    category: "Craft",
    price: "$9.99",
    inStock: false,
    stockStore: "Cricut",
  },
];

function render(prodArray) {
  let section = document.getElementById("Myproducts");

  for (let i = 0; i < prodArray.length; i++) {

    let bootstrapCard = `

    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${prodArray[i].name}</h5>
    <p class="card-text">${prodArray[i].category}</p>
    <p class="card-text">${prodArray[i].price}</p>
    <p class="card-text">${prodArray[i].inStock}</p>
    <p class="card-text">${prodArray[i].stockStore}</p>
    
  </div>
</div>`;

    section.innerHTML += bootstrapCard;
  }
}

render(products);
