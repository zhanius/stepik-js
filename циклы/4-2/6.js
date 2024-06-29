let a=+prompt();
let sum=0;
for(let i=0; i<=a; i++, sum+=i%2!=0?i:0){}
console.log(`Сумма нечетных чисел от 1 до ${a} равна ${sum}`);
