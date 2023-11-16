import { coffees } from "../data/coffees.js";

const renderCoffee = (coffee) => {
    const coffeeImage = coffee.img ? coffee.img : "./img/1_720.png";
    const coffeeElement = document.createElement("div")
    coffeeElement.classList.add(".col");
    coffeeElement.innerHTML = `
       <div class="card">
  <img src="${coffeeImage}" class="card-img-top"" alt="">
  <div class="card-body">
    <h5 class="card-title">${coffee.name}</h5>
    <p class="card-text">${coffee.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item ">Roast: ${coffee.roast}</li>
    <li class="list-group-item margin-bottom">Price: ${coffee.price}</li>
  </ul>
</div>

    `;
    return coffeeElement;
}
const updateCoffees = (coffees) => {
    const coffeesContainer = document.querySelector("#coffee-list")
    coffeesContainer.innerHTML = "";

    const searchInput = document.querySelector("#search");
    const searchValue = searchInput.value;
    const categoryInput = document.querySelector("#category");
    const categoryValue = categoryInput.value;

    let filterCoffees = coffees
    filterCoffees = filterCoffees.filter((coffee)=>{
        if (!categoryValue) {
            return true;
        }
        if (!coffee.roast) {
            return false;
        }
        return coffee.roast.toLowerCase().includes(categoryValue.toLowerCase());
    })
    filterCoffees = filterCoffees.filter((coffee)=>{
        if (!searchValue) {
            return true;
        }
        if (typeof coffee.name !== "string") {
            return false;
        }
        return coffee.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    filterCoffees.sort((a,b)=>{
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name){
            return 1;
        }
        return 0;
    });

    const coffeesFragment = document.createDocumentFragment();
    for (let coffee of filterCoffees) {
        const coffeeElement = renderCoffee(coffee);
        coffeesFragment.appendChild(coffeeElement);
    }
    coffeesContainer.appendChild(coffeesFragment);

}



//Main
(()=> {
    updateCoffees(coffees);
    const searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", ()=>{
        updateCoffees(coffees);
    });
    const categoryInput = document.querySelector("#category");
    categoryInput.addEventListener("change", ()=>{
        updateCoffees(coffees);
    });
})()


