
const loadDetailes = async (petId) => {
  // console.log(petId);
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();
    displayDetails(data.petData);
  console.log(data);
};


const displayDetails = (petData) => {
  const detailsBtn = document.getElementById("customModal");

  detailsBtn.innerHTML = `
  <img src ="${item.image}"/>
  `;

  
};