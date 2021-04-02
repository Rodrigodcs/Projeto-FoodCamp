let mainPrice = 0;
let drinkPrice = 0;
let dessertPrice = 0;
let done = 0;

function select(food){

  if(document.querySelector(".display")!==null){
    document.querySelector(".display").classList.remove("display")
  }
  let seletor="."+food+" .selection";
  console.log(seletor);
  const c = document.querySelector(seletor);
  c.classList.add("display");
  
}