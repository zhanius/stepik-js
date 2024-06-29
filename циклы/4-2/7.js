let a=+prompt();
let sumOdd = 0;
let sumEven = 0;
for(let i=1;i<=a;i++){
    if(i%2) {sumOdd++;}
    else {sumEven++;}
}
console.log("Количество четных чисел:",sumEven);
console.log("Количество нечетных чисел:",sumOdd);