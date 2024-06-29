let title = prompt("Введите название книги:");
let author = prompt("Введите автора книги:");
let date = prompt("Введите год издания книги:");

const book = {
    title,
    author,
    date
};

console.log(`Название книги: ${book.title}
Автор книги: ${book.author}
Год издания книги: ${book.date}`);