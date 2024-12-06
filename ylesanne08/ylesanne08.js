//Thorian Perk
//06.12.2024
//Javascript ülesanne 8

//mündid
const myndid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

let i = 0;
while (i < myndid.sort().length) {
    console.log(myndid[i]);
    i++;
}
console.log("Kokku on: "+myndid.reduce((a, b) => a + b) +" münti.");

