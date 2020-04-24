class Local {
  static getFood(){
    let food;
    if(localStorage.getItem('foods')=== null){
      food = [];
    } else {
      food = JSON.parse(localStorage.getItem('foods'))
    }
    return food;
  }
  static displayFood() {

  }
  static addFood(food){
    const foods = Local.getFood(food);
    foods.push(food)
    localStorage.setItem('foods', JSON.stringify(foods))
  }
  removeFood(){

  }

}