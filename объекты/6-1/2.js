let major = prompt();
let gpa = Number(prompt());
let student = {
    major,
    gpa
};

console.log("Специальность студента: " + student.major);
console.log("Средний балл студента: " + student.gpa);