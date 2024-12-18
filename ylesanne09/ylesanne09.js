//Thorian Perk
//06.12.2024
//Javascript ülesanne 9

//Klassika ja noolefunktsioonid
var erifunkt = function() {
    console.log("Thorian")
  };
  
  erifunkt();

//Argumentitega funktioonid
const event = new Date(Date.UTC(2024, 11, 6, 3, 0, 0));
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

console.log(event.toLocaleDateString('et-EE', options));

//Teadmata hulk
const taisarvud = [1, 2, 3, 4, 5, 6]; 

function koguarvjakeskmine(arr) {
  const koguarv = arr.reduce((sum, num) => sum + num, 0);
  const keskarv = koguarv / arr.length;
  return {
      sum: koguarv,
      average: keskarv
  };
}

const v = koguarvjakeskmine(taisarvud);
console.log(v); // { sum: 45, average: 9 }

//Salajane sõnum
const salajanesonum = () => {
    let sonym = "Kas on see salajane?";
    console.log(sonym.replace(/[aeiouüõäö]/g,"*"));
  };
  
  salajanesonum();

//Unikaalsed nimed
const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];

const unikaalsednimed = () => {
    unikaalsed = nimed.filter(function(item, pos) {
        return nimed.indexOf(item) == pos;
    })
    console.log(unikaalsed)
  };
  
  unikaalsednimed();