// Найдите пары тегов.

// Открывающий тег – это \[([a-z]+)\]

// Чтобы найти всё до закрывающего – используем [\s\S]*?

// Обратная ссылка на открывающий тег - \[\/\1\]

const regExp = /\[([a-z]+)\][\s\S]*?\[\/\1\]/i;

const string1 = "..[url]http://ya.ru[/url]..";
const string2 = "..[url][b]http://ya.ru[/b][/url]..";

console.log(string1.match(regExp)[0]); // [url]http://ya.ru[/url]
console.log(string2.match(regExp)[0]); // [url][b]http://ya.ru[/b][/url]