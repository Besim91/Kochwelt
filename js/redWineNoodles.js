let amounts = [125, 0.25, 150, 20, 0.5, 0.5, 0.5, 0.5];
let ingredients = ['g  Spaghetti', 'l  Rotwein, italienisch, trocken', 'ml  Gemüsebrühe', 'g  Räucherschinken, gewürfelt', 'Zweig/e  Rosmarin', 'Zwiebel(n), klein gewürfelt', 'el  Olivenöl', 'Zehe/n  Knoblauch', 'Parmesan', 'Thymian', 'Pfeffer', 'Salz',];

function recipe() {

        document.getElementById('table').innerHTML = '';
        let userInput = +document.getElementById('input').value;
        
        if(userInput >= 1){
        for (let i = 0; i < amounts.length; i++) {
          document.getElementById('table').innerHTML += `
            <tr class="tr" id="tr">
              <td class="td-amount" id="td-amount">${userInput*amounts[i]} ${ingredients[i]}</td>
            </tr>
            `
        }

        for (let i = 8; i < ingredients.length; i++) {
          document.getElementById('table').innerHTML +=`
          <tr class="tr" id="tr">
          <td class="td-amount" id="td-amount">${ingredients[i]}</td>
          </tr>
          `
        }

        document.getElementById('kcal').innerHTML = `718 kcal`;
        let kcal = 718;
        let kcalResult = kcal*userInput;
        document.getElementById('kcal').innerHTML = `${kcalResult} kcal`;
      }
      else{ 
          alert(`Keine Werte kleiner als Null oder Null eingeben!`);
          document.getElementById(`input`).value=``;
      }

}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}