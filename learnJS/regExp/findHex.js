// Напишите регулярное выражение, которое находит цвет в формате #abc или #abcdef. 
// То есть, символ #, после которого идут 3 или 6 шестнадцатиричных символа.

const regExp = /#([a-f0-9]{3}){1,2}\b/gi;

const string = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log(string.match(regExp)); // #3f3 #AA00ef