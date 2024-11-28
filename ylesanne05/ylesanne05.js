//Thorian Perk
//28.11.2024
//Javascript ülesanne 5

//Temperatuur
let temp = 11;

if (temp >= 25) {
   console.log("Väga kuum ilm!");
} else if (temp >= 15) {
   console.log("Mõnus temperatuur.");
} else {
   console.log("Jahe ilm.");
}

//Kasutajanimed
let kasutaja = "admin";
let kontroll = (kasutaja == "admin") ? "Tere, administraator!" : "Tere, kylaline!";
console.log(kontroll); // Väljund: "Jah"

//Pileti hind
let pilet = "soodus";
let vanus = 17;
let hind = 0;

if (pilet == "tais") {
   if (vanus < 18) {
      hind = 10;
   } else if (vanus >= 18 && vanus <= 65)  {
      hind = 20;
   } else {
      hind = 15;
   }

}  else {
   if (vanus < 18) {
      hind = 8;
   } else if (vanus >= 18 && vanus <= 65)  {
      hind = 15;
   } else {
      hind = 8;
   }

}
console.log("pileti hind: "+ hind + "€");