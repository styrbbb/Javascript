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

    // Funktsioon sünniaasta ja vanuse arvutamiseks
    function arvutainimandmed(isikukood) {
        const kuupaev = new Date("2024-12-20");
        const esimenekood = parseInt(isikukood.charAt(0), 10);
        const synnu = parseInt(isikukood.substring(1, 3), 10);

        // Määrame sajandi sünniaasta põhjal
        let aasta;
        if (esimenekood === 1 || esimenekood === 2) aasta = 1800;
        else if (esimenekood === 3 || esimenekood === 4) aasta = 1900;
        else if (esimenekood === 5 || esimenekood === 6) aasta = 2000;

        const synniaasta = aasta + synnu;
        const synnikuupaev = new Date(synniaasta, parseInt(isikukood.substring(3, 5), 10) - 1, parseInt(isikukood.substring(5, 7), 10));
        const vanus = kuupaev.getFullYear() - synnikuupaev - (kuupaev < new Date(kuupaev.getFullYear(), synnikuupaev.getMonth(), synnikuupaev.getDate()) ? 1 : 0);

        return { synniaasta, vanus };
    }

    // Lisame meetodi inimeste massiivile
    inimesteAndmed.forEach(nimi => {
        const { synniaasta, vanus } = arvutainimandmed(nimi.isikukood);
        nimi.synniaasta = synniaasta;
        nimi.vanus = vanus;
    });

    // Väljasta tulemused
    console.log(inimesteAndmed);


//Kaugushype
const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

function kaugushyped(opilased) {
    opilased.forEach(opilane => {
      const tulemused = opilane.tulemused;
      const parim = Math.max(...tulemused);
      const keskmine = (
        tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / tulemused.length
      ).toFixed(2);
  
      console.log(`Õpilane: ${opilane.nimi}`);
      console.log(`Parim tulemus: ${parim}`);
      console.log(`Keskmine tulemus: ${keskmine}`);
      console.log("------");
    });
  }
  
  kaugushyped(opilased);

//console.log(opilased);


