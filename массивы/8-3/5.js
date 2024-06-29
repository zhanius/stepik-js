const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];
let city = prompt();
console.log(cities.includes(city) ? `Города, начинающиеся с буквы "${city[0]}": ${cities.filter(item => item.startsWith(`${city[0]}`)).join(", ")}` : "Такого города нет в списке");