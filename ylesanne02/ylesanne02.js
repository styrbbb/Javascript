//Thorian Perk
//31.10.2024
//Javascript ülesanne 2

//kellaaeg
let mark1 = 2; 
let mark2 = 38; 
let mark3 = 59;

let kellaaeg = `Oodatav tulemus näiteks: ${mark1}:${mark2}:${mark3}PM`;

console.log(kellaaeg);


//tsitaat
let txt = "Kadugu otsekohe ja alatiseks jälestusväärne vahetegemine rikaste ja vaeste vahel, inimeste jaotamine tähtsateks ja tähtsusetuteks, isandateks ja teenriteks, valitsejateks ja alamateks. Ärgu olgu inimeste vahel muid erinevusi peale vanuse ja soo. Kuna meil kõigil on ühesugused vajadused ja võimed, olgu ka haridus kõigile ühesugune, samuti toit.";
let autor = ' -"Gracchus Babeuf"';

let tsit = `${txt}:${autor}`;
console.log(tsit);

//Mallid
let menimi = "Thorian";
let mpnimi = "Perk";

let e1 = menimi[0];
let p1 = mpnimi[0];

let m = `${menimi} ${mpnimi} nimetähed on ${e1}.${p1}.`;
console.log(m)

//Perenimed
let enimi = "Ülle";
let pnimi = "Doos";

let sk = `${enimi}, ${pnimi}`;
console.log(sk.indexOf(','));
console.log(sk.toUpperCase().split(",")[0]);
console.log(sk.length);

//E-posti aadressid
let email = 'test123@netlog.com';
console.log(email.replaceAll("netlog", "gmail"));

//Andmerida analüüs
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let ese = "Tulemus on:";
let esk = "ja";

console.log(ese,andmerida.slice(51,70),esk,andmerida.slice(21,32));
