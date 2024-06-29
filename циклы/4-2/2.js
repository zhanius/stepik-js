let start = Number(prompt("Введите начальное значение диапазона:"));
let end = Number(prompt("Введите конечное значение диапазона:"));
let sum = 0;

for (; start<=end; start++) {
  sum += start;
}
console.log(sum);