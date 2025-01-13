"use strict";

let bands = [
  {
    name: "Jodeci",
    genre: "RnB",
    formedYear: 1988,
    active: true,
    members: ["K-Ci Hailey", "Jojo Hailey", "DeVante Swing", "Dalvin DeGrate"],
  },
  {
    name: "New Kids On The Block",
    genre: "Pop",
    formedYear: 1984,
    active: true,
    members: [
      "Donnie Wahlberg",
      "Joey McIntyre",
      "Jonathon Knight",
      "Jordan Knight",
      "Danny Wood",
    ],
  },
  {
    name: "No Doubt",
    genre: "Punk",
    formedYear: 1986,
    active: false,
    members: ["Gwen Stefani", "Tony Kanal", "Adrian Young", "Tom Dumont"],
  },
  {
    name: "The Clark Sisters",
    genre: "Gospel",
    formedYear: 1966,
    active: true,
    members: [
      "Jacky Clark Chisholm", 
       "Dorinda Clark-Cole",
       "Karen Clark Sheard",
       "Twinkie Clark", "Denise Clark-Bradford (former member)"
    ],
  },
];

function render(bandArray) {

  let section = document.getElementById('Mybands');

  for (let i = 0; i < bandArray.length; i++) {
    let bootstrapCard = `

    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${bandArray[i].name}</h5>
    <p class="card-text">${bandArray[i].genre}</p>
    <p class="card-text">${bandArray[i].formedYear}</p>
    <p class="card-text">${bandArray[i].active}</p>
    <p class="card-text">${bandArray[i].members.join(', ')}</p>
    
  </div>
</div>`;

    section.innerHTML += bootstrapCard;
  }
}

render(bands);
