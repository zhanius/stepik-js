const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const users = [
  { id: 1, name: "Иван", age: 30 },
  { id: 2, name: "Мария", age: 25 },
  { id: 3, name: "Алексей", age: 35 },
  { id: 4, name: "Елена", age: 28 },
];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let newarr = daysOfWeek.concat(users,months);
console.log(newarr);