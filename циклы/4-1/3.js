let a = +prompt();
let b = a;
let sum = 1;
while(a>0){
    sum = sum*a;
    a-=1;
}
console.log("Факториал числа" , b,  "равен" ,sum);