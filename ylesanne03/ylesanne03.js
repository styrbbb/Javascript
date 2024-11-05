//Thorian Perk
//05.11.2024
//Javascript ülesanne 3

//Sõidu aeg ja kiirus
let dist = 20;
let kmh = 50;

let div = `Auto sõiduaeg tundides on: ${dist/kmh}`;
console.log(div);

//Postituste kuvamine
let amount = 137;
let max = 10;

let div2 = `~${amount/max} lehekülgi on vaja, et kõiki ${amount} postitusi kuvada.`;
console.log(div2);

//Serveri töökulu
let voimsus = 400;
let hind = 9.69;
let kwht1 = "Voolutarbimine (kWh) = 400 / 1000 ="; //Voolutarbimise ehk kWh arvutamine

let kwh = `${voimsus/1000}`;
console.log(kwht1,kwh);

let tookulu = `Serveri töös hoidime ühe tunni jooksul on: ~${hind/kwh} eurot.`; //Serveri töökulu arvutamine tunnis
console.log(tookulu);
