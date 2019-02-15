// Найдите все HTML-комментарии в тексте:

const regExp = /<!--[\s\S]*?-->/g;

const string = '.. <!-- Мой -- комментарий \n тест --> ..  <!----> .. ';

console.log(string.match(regExp)); // '<!-- Мой -- комментарий \n тест -->', '<!---->'