//Thorian Perk
//12.12.2024
//Javascript ülesanne 11

//Nimed
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

//Nimede parandmine
const at = nimed.map((eesnimi) => {
    return eesnimi[0].toUpperCase() + eesnimi.slice(1);

});
console.log(at);

function sbb(str) {
    return str
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/õ/g, 'o')
        .replace(/Ä/g, 'A')
        .replace(/Ö/g, 'O')
        .replace(/Ü/g, 'U')
        .replace(/Õ/g, 'O');
}

//E-mailide perenimedega genereerimine
nimed.forEach(nimi => {
    const pnimi = nimi.split(' ').pop().toLowerCase();
    const pnimed = sbb(pnimi);
    const email = `${pnimed}@gmail.com`;
    console.log(email);
  });

//Sunniaeg ja vanus
const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    { nimi: "Thorian Perk", isikukood: "50606227047" },
    // Lisa kontrollimiseks oma nimi ja isikukood
    ];


