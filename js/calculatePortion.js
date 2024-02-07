let amountLasagne = [75,125,0.25,0.5,0.25,0.25,0.25,0.125,7.5,10] 
let lasagneIngredients = [`g Lasagneblätter`,`g gemischtes Hackfleisch`,` Zwiebel`,` Knoblauch`,` Bund Pertersilie`,` EL Tomatenmark`,` Dose geschälte Tomaten (800 g)`,`Liter Milch`,`g Butter`,`g Mehl`,`Salz und Pfeffer`, `Zitronensaft`,`Muskat`,`Geriebener Käse`,`Butterflöckchen`,`Olivenöl`,` Etwas Rotwein`]

let amountBolognese = [1,1,1,500,200,70,1,400,2,500]
let bologneseIngredients = [`Zwiebel`,`Zehe Knoblauch`,`Möhre`,`g Rinderhackfleisch oder Tartar`,`ml Gemüsebrühe`,`g Tomatenmark`,`TL Oregano`,`g Tomaten, stückige, mit Kräutern, z. B. aus dem Tetrapack`, `EL Tomatenketchup`,`g Spaghetti`,`Salz und Pfeffer`]

let array;
let ingredients;


function calculatePortion(wertKcal, kcalID){
    document.getElementById(`table`).innerHTML=``;
    let inputwert = +document.getElementById(`input`).value;

if(inputwert >= 1){
if(wertKcal == `1122`){
    array = amountLasagne;
    ingredients = lasagneIngredients;
}
if(wertKcal == `560`){
    array = amountBolognese;
    ingredients = bologneseIngredients;
}

    for(i = 0; i < array.length; i++){
             document.getElementById(`table`).innerHTML += `<tr> <td>${inputwert * array[i] + " " + ingredients[i]} </td></tr>`;
            }
    for(n=10 ; n < ingredients.length ; n++){
        document.getElementById(`table`).innerHTML+=`<tr><td>${ingredients[n]}</td></tr>`;
    }

    kcalCalculate(inputwert, wertKcal, kcalID);
}
else{ 
    alert(`Keine Werte kleiner als Null oder Null eingeben!`);
    document.getElementById(`input`).value=``;
}
}


function kcalCalculate(inputwert, wertKcal, kcalID){
    document.getElementById(kcalID).innerHTML = wertKcal;
    let neueKcal = (wertKcal * inputwert);
    document.getElementById(kcalID).innerHTML = `${neueKcal} kcal`; 
}
