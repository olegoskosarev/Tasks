// Создайте регулярное выражение для поиска всех (открывающихся и закрывающихся) HTML-тегов вместе с атрибутами.
// Хотя бы один символ внутри тега должен быть: <> – не тег.

const regExp = /<[^>]+?>/g;

const string = '<> <a href="/"> <input type="radio" checked> <b>';

console.log(string.match(regExp)); // '<a href="/">', '<input type="radio" checked>', '<b>'