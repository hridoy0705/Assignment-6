// fetching data loaded
const loadAllPetsData = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayAllPetsData(data.pets))
    .catch((error) => console.log(error));
};

const spacificPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displaySpacificPets(data.categories))
    .catch((error) => console.log(error));
};


const displayPetsByCategory = (id) => {
  //  alert(id)
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
      .then((res) => res.json())
      .then((data) => displayAllPetsData(data.data))
      .catch((error) => console.log(error));
};

const displaySpacificPets = (data) => {
  data.forEach((item) => {
    // console.log(item)

    const petsBtn = document.createElement("div");

    petsBtn.innerHTML = `
    
    <button onclick="displayPetsByCategory('${item.category}')"  class="btn w-[200px] h-[70px] rounded-full text-xl"><img class=" w-7 h-7 " src="${item.category_icon}"/>${item.category}</button>
  `;
    const petsContiner = document.getElementById("petsButton");
    petsContiner.append(petsBtn);
  });
};

// show all data
const displayAllPetsData = (allPetsData) => {
  
  allPetContiner.innerHTML = " ";
  if(allPetsData.length == 0){
    allPetContiner.classList.remove("gird");
    allPetContiner.classList = "grid justify-center items-center mt-7"
    allPetContiner.innerHTML = `
    <div class ="min-h screen w-full flex flex-col gap-5 justify-center items-center">
    <img src = "images/error.webp">
    <h2 class ="text-2xl justify-center font-bold">No Information Available</h2>
    <p>It is a long established fact that a reader  will be distracted by the readable content of <br> a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>`;
    return;

  }
  else{
    allPetContiner.classList.add("gird");
  }
  allPetsData.forEach((item) => {
    // console.log(item)
    const petsCard = document.createElement("div");
    const allPetContiner = document.getElementById("allPetContiner");
    allPetContiner.classList =
      "grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-10";
    petsCard.classList = "card bg-base-100 w-full  hover:shadow-2xl";
    petsCard.innerHTML = `

  <figure class="px-4 pt-4">
    <img
      src=${item.image}
      alt="Shoes"
      class="rounded-xl object-cover w-full" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.pet_name}</h2>
    <p> <i class="fa-solid fa-border-all"></i> Breed: ${item.breed}</p>
    <p><i class="fa-regular fa-calendar-days"></i> Date of Birth: ${item.date_of_birth}</p>
    <p><i class="fa-solid fa-venus-double"></i> Gender: ${item.gender}</p>
    <p><i class="fa-solid fa-dollar-sign"></i> Price: ${item.price}</p>
    <div class="flex gap-2 justify-between pt-2">
      <button class="btn btn-outline"><i class="fa-regular fa-thumbs-up text-2xl"></i></button>
      <button class="btn btn-outline font-bold">Adopt</button>
      
      <!-- The button to open modal -->
    <label for="customModal" class="btn w-[100px] btn-outline">Details</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="customModal" class="modal-toggle" />
    <div class="modal" role="dialog">
    <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">
     <img
      src=${item.image}
      alt="Shoes"
      class="rounded-xl object-cover w-full" />
    ${item.breed}<br>
    ${item.category}<br>
    ${item.date_of_birth}<br>
    ${item.price}<br>
    ${item.gender}
    </p>
    <div class="modal-action">
      <label for="customModal" class="btn">Close!</label>
    </div>
  </div>
</div>
    </div>
  </div>

  `;
    allPetContiner.append(petsCard);
  });
};

loadAllPetsData();
spacificPets();

