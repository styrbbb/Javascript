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
    
    const calculateData = (persons) => {
        const result = [];
        const currentDate = new Date("2024-12-17");
    
        persons.forEach(person => {
            const isikukood = person.isikukood;
    
            // Extract the century, year, month, and day from the personal ID
            const centuryCode = parseInt(isikukood[0]);
            const year = parseInt(isikukood.slice(1, 3));
            const month = parseInt(isikukood.slice(3, 5));
            const day = parseInt(isikukood.slice(5, 7));
    
            // Determine the full year based on the century code
            let fullYear;
            if (centuryCode === 1 || centuryCode === 2) {
                fullYear = 1800 + year;
            } else if (centuryCode === 3 || centuryCode === 4) {
                fullYear = 1900 + year;
            } else if (centuryCode === 5 || centuryCode === 6) {
                fullYear = 2000 + year;
            } else if (centuryCode === 7 || centuryCode === 8) {
                fullYear = 2100 + year;
            }
    
            // Calculate the date of birth
            const birthDate = new Date(fullYear, month - 1, day);
    
            // Calculate the age
            let age = currentDate.getFullYear() - birthDate.getFullYear();
            if (
                currentDate.getMonth() < birthDate.getMonth() ||
                (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
            ) {
                age--;
            }
    
            // Add the results to the new array
            result.push({
                nimi: person.nimi,
                isikukood,
                synniaeg: birthDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
                vanus: age
            });
        });
    
        return result;
    };
    
    const enrichedData = calculateData(inimesteAndmed);
    console.log(enrichedData);

