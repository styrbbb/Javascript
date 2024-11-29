//Thorian Perk
//29.11.2024
//Javascript ülesanne 6

//positiivne ja negatiivne
let number = -7;

switch (true) {
    case (number >= 1):
      programm = "Sisestatud number on positiivne.";
      break;
    case (number <= -1):
        programm = "Sisestatud number on negatiivne.";
      break;
    default:
        programm = "Sisestatud number on null."; 
    }
  console.log(programm)

//Restoran
let b_arv = 7;

switch (true) {
    case (b_arv >= 1 && b_arv <= 2):
      broneering = "Vailge laud kahele inimesele.";
      break;
    case (b_arv >= 3 && b_arv <= 4):
        broneering = "Vailge laud neljale inimesele.";
      break;
    case (b_arv >= 5 && b_arv <= 6):
        broneering = "Vailge laud kuuele inimesele.";
      break;
    case (b_arv >= 6):
        broneering = "Vailge suur laud.";
      break;
    default:
        broneering = "Tühista?"; 
    }

    console.log(broneering);