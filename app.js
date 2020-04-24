const meal = new Meal;
const local = new Local;
const generate = document.getElementById('generate').addEventListener('click', getMealsByName);
const alpha = document.getElementById('alphabet').addEventListener('keyup', getMealsByAlphabet);
const name = document.getElementById('name');

const remove = document.querySelector('.fa-trash').addEventListener('click', removeFromLocalStorage);
document.getElementById('random').addEventListener('click', getRandomFood)

function getMealsByName(e){
const mealName = name.value

if(mealName !== ''){
  console.log(mealName)
  meal.getMealsByFullName(mealName)
  .then(data => {
    data.meals.forEach(eat => {
      let output = ''
      output += `
        <div class= "card">
          <p>Meal Category: ${eat.strCategory}</p>
          <p>Meal Name: ${eat.strMeal}</p>
          <p id = "description"> Instructions: ${eat.strInstructions}</p>
        </div>
        <div class="icons">
          <a href="#"><i class="fas fa-save"></i></a>
          <a href="#"><i class="fas fa-trash"></i></a>
        </div>
      `
      document.querySelector('.result').innerHTML = output;
      const saveToLocalStorage = ()=>{
        document.querySelector('.fa-save').addEventListener('click', ()=> {
          Local.addFood(output)
        });
        
      }

      saveToLocalStorage()
      
    })
    
    console.log(data.meal)
  })
  .catch(err => console.log(err));
}
  e.preventDefault()
}


function getMealsByAlphabet(e){
  const alphabet = e.target.value;

  if(alphabet !== ''){
    meal.getMeals(alphabet)
    .then(data => {
      data.meals.forEach(eat => {
        let output = ''
        output += `
          <div class= "card">
            <p>Meal Category: ${eat.strCategory}</p>
            <p>Meal Name: ${eat.strMeal}</p>
            <p id = "description"> Instructions: ${eat.strInstructions}</p>
          </div>
          <div class="icons">
            <a href="#"><i class="fas fa-save"></i></a>
            <a href="#"><i class="fas fa-trash"></i></a>
          </div>
        `
        document.querySelector('.result').innerHTML = output;
      });
    })
  } 
}

function getRandomFood(){
  meal.getRandom()
  .then( data => {
    data.meals.forEach(eat => {
      let output = ''
      output += `
        <div class= "card">
          <p>Meal Category: ${eat.strCategory}</p>
          <p>Meal Name: ${eat.strMeal}</p>
          <p id = "description"> Instructions: ${eat.strInstructions}</p>
        </div>
        <div class="icons">
          <a href="#"><i class="fas fa-save"></i></a>
          <a href="#"><i class="fas fa-trash"></i></a>
        </div>
      `
      document.querySelector('.result').innerHTML = output;
  });
})
}
