//Thorian Perk
//11.12.2024
//Javascript ülesanne 11

const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

const capitalized = nimed.map((eesnimi) => {
    return eesnimi[0].toUpperCase() + eesnimi.slice(1);

});

console.log(capitalized);