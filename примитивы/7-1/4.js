const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(a,b,c){
    return `Вы выбрали ${c} товаров "${a}" по цене ${b} рублей за штуку. Итого: ${b*c} рублей.`;
};    

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);