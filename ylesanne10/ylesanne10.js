//Thorian Perk
//10.12.2024
//Javascript ülesanne 10

//Toote objekt
const toode = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },
      ],
      summa() {
        let kokku = 0;
        this.tooted.forEach(toode => kokku += (toode.hind*toode.kogus));  
        return Math.round(kokku * 100) / 100;
      } ,
      lisatoode(n, h, k) {
       
        this.tooted.push({ nimi:n, hind:h, kogus:k});
      }
    };
    toode.lisatoode('Porgand', 99, 2);
    console.log(`Ostukorv kokku: ${toode.summa()}`);



