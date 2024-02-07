let amounts = [125,1,0.5,0.15,0.5,0.75,84,0.5,1];
let ingredients = [' g Mehl', 'g Hefe', 'Dose Tomate(n),geschält', ' TL Knoblauchzehe(n),gehackt', ' Liter Öl (Olivenöl oder Sonnenblumenöl)', '  Liter Wasser,warm', ' g Käse (Gouda),in Scheiben', ' Dose(n) Thunfisch,in Öl', ' Zwiebel(n)', 'Eine prise,Salz und Pfeffer', 'Pizzagewürz'];
let amounts1 = [4, 1, 0.5, 0.5, 0.5, 0.25, 1 / 4];
let ingredients1 = ['stk. m.-große  Kartoffeln', ' EL Olivenöl', ' TL Meersals,grobes,bei Bedarf auch mehr', ' TL Paprikapulver,edelsüß', 'TL Currypulver', 'TL Rosmarin', 'st.  Zwiebel(n)', 'Eine prise,Salz und Pfeffer', 'Etwas,Paprikapulver'];
let amountsExtra = [1, 1];
let ingredientsExtra = ['Becher saure Sahne', 'EL Kräuter,nach Wahl', 'Ein wenig,frisch gepresste Zitrone', 'Etwas,Salz und Pfeffer'];

function recipe() {
  document.getElementById('table').innerHTML = '';
  let userInput = +document.getElementById('input').value;

  if(userInput >= 1){
  for (let i = 0; i < amounts.length; i++) {
    document.getElementById('table').innerHTML +=
      `<tr><td class="td-amount">${userInput * amounts[i]} ${ingredients[i]}</td></tr>`
  }
  for (let i = 9; i < ingredients.length; i++) {
    document.getElementById('table').innerHTML += `<tr><td class="td-amount">${ingredients[i]}</td></tr>`
  }
  kcalPizza(userInput);
}
else{ 
    alert(`Keine Werte kleiner als Null oder Null eingeben!`);
    document.getElementById(`input`).value=``;
}
}

function kcalPizza(userInput){
  document.getElementById('kcal').innerHTML = `1605`
  let kcal = 1605;
  let neueKcal = kcal * userInput;
  document.getElementById('kcal').innerHTML = `${neueKcal} kcal`;
}

function recipe2() {
  document.getElementById('table1').innerHTML = '';
  let userInput = +document.getElementById('input').value;

  if(userInput >= 1){
  for (let i = 0; i < amounts1.length; i++) {
    document.getElementById('table1').innerHTML +=
      `<tr><td class="td-amount">${userInput * amounts1[i]} ${ingredients1[i]}</td></tr>`
  }
  for (let i = 7; i < ingredients1.length; i++) {
    document.getElementById('table1').innerHTML += `<tr><td class="td-amount">${ingredients1[i]}</td></tr>`
  }
  dip(userInput);
  kcalPotato(userInput);
}
else{ 
    alert(`Keine Werte kleiner als Null oder Null eingeben!`);
    document.getElementById(`input`).value=``;
}
}

function dip(userInput){
  document.getElementById('tableExtras').innerHTML = '';
  for (let i = 0; i < amountsExtra.length; i++) {
    document.getElementById('tableExtras').innerHTML +=
      `<tr><td class="td-amount">${userInput * amountsExtra[i]} ${ingredientsExtra[i]}</td></tr>`
  }
  for (let i = 2; i < ingredientsExtra.length; i++) {
    document.getElementById('tableExtras').innerHTML += `<tr><td class="td-amount">${ingredientsExtra[i]}</td></tr>`
  }
}

function kcalPotato(userInput){
  document.getElementById('kcal1').innerHTML = `389`
  let kcal = 389;
  let neueKcal = kcal * userInput;
  document.getElementById('kcal1').innerHTML = `${neueKcal} kcal`;
}