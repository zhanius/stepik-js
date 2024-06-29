let a = +prompt();
let iterCnt = 0;
let res = a;
while(res <= 1000){
    res *= 2;
    iterCnt++;
}
console.log("Итоговое число:",res);
console.log("Количество итераций:",iterCnt);