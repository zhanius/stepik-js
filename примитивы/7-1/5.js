const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(a,b,c){
    return `Вы выбрали "${a}" по цене ${b} рублей за штуку.
Количество: ${c} шт.
Итого: ${b*c} рублей.`;
};    

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);