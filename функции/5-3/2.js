function findMax(a, b) {
    return a > b ? a : b;
}

function compareMax(x, y) {
    let result = "Максимальные числа наборов равны";
    if (x !== y)
        result = `Максимальное число ${x > y ? "первого" : "второго"} набора больше`;
    console.log(result);
}

const x1 = Number(prompt("Введите первое число первого набора:"));
const y1 = Number(prompt("Введите второе число первого набора:"));
const x2 = Number(prompt("Введите первое число второго набора:"));
const y2 = Number(prompt("Введите второе число второго набора:"));

compareMax( findMax(x1, y1), findMax(x2, y2) );