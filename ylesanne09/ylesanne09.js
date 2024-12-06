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