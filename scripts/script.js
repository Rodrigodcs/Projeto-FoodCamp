let mainName = "";
let mainPrice = 0;
let drinkName = "";
let drinkPrice = 0;
let dessertName = "";
let dessertPrice = 0;
let totalPrice = 0;
let clientName = "";
let clientAdress = "";
let choicesSelected = 0;
let requestString = "";
let a=0;

function selectMain(main){
  const selected = document.querySelector(".main-box .display");

  if(selected !== null){
    selected.classList.remove("display");
    choicesSelected--;
  }
  
  let seletor="." + main + " .selection";
  const c = document.querySelector(seletor);
  c.classList.add("display");
  choicesSelected++;
  mainName = document.querySelector("." + main + " h2").innerHTML;
  mainPrice = parseFloat(document.querySelector("."+main+" span").innerHTML.replace(",","."));

  check();
}

function selectDrink(drink){

  const selected = document.querySelector(".drinks-box .display");
  if(selected !== null){
    selected.classList.remove("display");
    choicesSelected--;
  }

  let seletor="." + drink + " .selection";
  const c = document.querySelector(seletor);
  c.classList.add("display");
  choicesSelected++;

  drinkName = document.querySelector("." + drink + " h2").innerHTML;
  drinkPrice = parseFloat(document.querySelector("."+drink+" span").innerHTML.replace(",","."));

  check();
}

function selectDessert(dessert){
  const selected = document.querySelector(".desserts-box .display");
  if(selected !== null){
    selected.classList.remove("display");
    choicesSelected--;
  }

  let seletor = "." + dessert + " .selection";
  const c = document.querySelector(seletor);
  c.classList.add("display");
  choicesSelected++;

  dessertName = document.querySelector("." + dessert + " h2").innerHTML;
  dessertPrice = parseFloat(document.querySelector("." + dessert + " span").innerHTML.replace(",","."));

  check();
}

function check(){
  if(choicesSelected===3){
    document.querySelector(".confirmation-button").classList.add("display");
  }
}

function finalScreen(){
  if(a===0){
  clientName = prompt("Qual seu nome?");
  clientAdress = prompt("Qual seu endereço?");
  a=1;}
  totalPrice = mainPrice + drinkPrice + dessertPrice;
  
  requestString = "Olá, gostaria de fazer o pedido:\n- Prato: "+ mainName+"\n- Bebida: "+drinkName+"\n- Sobremesa: "+dessertName+"\nTotal: R$ "+String(totalPrice.toFixed(2)).replace(".",",")+"\n\nNome: "+clientName+"\nEndereço: "+clientAdress;
  requestString = encodeURIComponent(requestString);
  document.querySelector("a").setAttribute("href","https://wa.me/?text="+requestString);

  document.querySelector(".main-name").innerHTML = mainName;
  document.querySelector(".main-price").innerHTML = String(mainPrice.toFixed(2).replace(".",","));
  document.querySelector(".drink-name").innerHTML = drinkName;
  document.querySelector(".drink-price").innerHTML = String(drinkPrice.toFixed(2).replace(".",","));
  document.querySelector(".dessert-name").innerHTML = dessertName;
  document.querySelector(".dessert-price").innerHTML = String(dessertPrice.toFixed(2).replace(".",","));
  document.querySelector(".total-price").innerHTML = String(totalPrice.toFixed(2).replace(".",","));
  document.querySelector(".confirmation-background").classList.add("display");
}

function cancel(){
  document.querySelector(".confirmation-background").classList.remove("display");
}
