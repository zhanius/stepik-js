let month = +prompt();
let degree = +prompt();
if(month>=3 && month<=5){
    console.log(degree <= 15 ? "Весна (прохладная весна)":"Весна"); }
else if(month>=6 && month<=8){
    console.log(degree >= 30 ? "Лето (жаркое лето)":"Лето"); }
else if(month>=9 && month<=11){
    console.log(degree < 0 ? "Осень (прохладная осень)" : "Осень"); }
else console.log(degree <= -25 ? "Зима (холодная зима)":"Зима");