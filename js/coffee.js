const coffee = [
    {name: 'Black Ivory Coffee', roast: 'Light', type: ''},
    {name: 'Death Wish Coffee', roast: 'Dark'},
    {name: 'Kopi Luwak', roast: 'Medium'},
    {name: 'Hacienda La Esmeralda', roast: 'Light'},
    {name: 'St. Helena Coffee', roast: 'Medium'},
    {name: 'Jacu Bird Coffee', roast: 'Medium'},
    {name: 'Black St. Peter’s', roast: 'Medium'},
    {name: 'Blue Mountain Coffee', roast: 'Light'},
    {name: 'Yemeni Coffee (Mocha)', roast: 'Dark'},
    {name: 'Galapagos Coffee', roast: 'Medium'},
    {name: 'Hawaiian Kona Coffee', roast: 'Medium'},
    { name: 'Eggnog Latte'},
    { name: 'Cinnamon Maple Coffee'},
    { name: 'Toasted Almond Mocha'},
    { name: 'Spiced Orange Caramel Latte'},

]


// self note: this is the array of coffee objects and its properties. ^^^^
// use cards
// we need to make var for our values "name" "roast"
//

const renderCoffee = () => {
    const coffeeList = document.createElement("div")
    coffeeList.classList.add(".col")
    coffeeList.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    
    
    
    
    
    
    `;

}


