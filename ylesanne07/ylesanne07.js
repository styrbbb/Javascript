//Thorian Perk
//29.11.2024
//Javascript ülesanne 7

//Tooted

const tooted = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

for (let i = 0; i < tooted.length; i++) {
  if (i === 10) {
    break;
  }
  if (tooted[i] != "Muna" && tooted[i] != "Sibul" && tooted[i] != "Riis"  ) {
    console.log((i+1)+". "+tooted[i]);
  }
}