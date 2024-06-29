let a = +prompt();
let b = +prompt();
let c = +prompt();
console.log(a==c && a==b ? "Равносторонний" : a==b || b==c || a==c ? "Равнобедренный" : "Разносторонний");