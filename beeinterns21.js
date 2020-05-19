// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

   let newObj = Object.assign({},firstObject)
   let keys = Object.keys(newObj);
keys.forEach(function resolve1(key){
  
  let val = newObj[key]; 
  delete newObj[key]  // get the value for the current key
   return newObj[val] = key;      // reverse is done here
});

console.log(newObj); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};

let newObj2 = Object.assign({},secondObject)
let keys2 = Object.keys(newObj2);
keys2.forEach(function resolve1(key){

let val = newObj2[key];
delete newObj2[key]   // get the value for the current key
return newObj2[val] = key;      // reverse is done here
});


console.log(secondObject);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(newObj2); 
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math
const centuryFromYear = (year) => console.log(Math.ceil(year/100))
const year = 1905;
centuryFromYear(year); // 20

const year2 = 1700;
centuryFromYear(year2); // 17.
