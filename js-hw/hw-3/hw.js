/*
    Данный код выводит неверное сообщение о возрасте
    исправте ошибку и так же перепишите код
    используя новый синтаксис
    используя подходящие оператоы
    следуя рекомендациям по именованию переменных
*/

let age = 20;
let writeMyAge = 'Ваш возраст: ' + age + ' лет';
alert(writeMyAge); // Должен вывести: Ваш возраст: 20 лет

let currDate = new Date() 

let currHours = currDate.getHours();
let currMinutes = currDate.getMinutes();

let currTime = 'Текущее время: ' + currHours + ':' + currMinutes ;
alert(currTime); // Должен вывести: Текущее время: 13:45
