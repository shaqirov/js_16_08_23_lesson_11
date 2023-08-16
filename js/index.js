// найти элемент у которого name = Dastan, age = 27
// 1) получить индекс
// 2) вывести весь объект
// 3) вывести отдельно значение Dastan и значение 27

// const users = [
//     {
//         name: "Dastan",
//         age: 22
//     },
//     {
//         name: "Dastan",
//         age: 28
//     },
//     {
//         name: "Anna",
//         age: 28
//     },
//     {
//         name: "Anna",
//         age: 24
//     },
//     {
//         name: "Dastan",
//         age: 27
//     }
// ]

// const indexOfUser = users.findIndex(user => user.name === 'Dastan' && user.age === 27)
// console.log(indexOfUser);
// console.log(users[indexOfUser]);
// console.log(users[indexOfUser].name);
// console.log(users[indexOfUser].age);
// -------------------------------------------------------------------------------------

/* 1) Составьте программу, которая принимает с клавиатуры числа, 
      пока не будет введено значение 99. Программа должна подсчитать, 
      сколько чисел было введено с клавиатуры (не считая значения 99) 
      и вывести эту информацию на экран.
      ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4 */
let numsArray = []
let num = parseInt(prompt('Введите число'))
while (num  !== 99) {
    numsArray.push(num)
    num = parseInt(prompt('Введите число'))
}
console.log(numsArray);
alert(`Количество чисел: ${numsArray.length}`);
// -------------------------------------------------------------------------------------

/* 2) Составьте программу, которая принимает с клавиатуры числа, 
   пока не будет введено значение 999. Программа должна подсчитать, 
   сколько чисел было введено с клавиатуры, чему равна сумма этих 
   чисел (не считая значения 999), и вывести эту информацию на экран.
   ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290 */
   let numbersArray = []
   let number = parseInt(prompt('Введите число'))
   while (number !== 999) {
       numbersArray.push(number)
       number = parseInt(prompt('Введите число'))
   }
   const result = numbersArray.reduce((previusValue, value) => {
    if (value >= 0) {
        return previusValue + value
    } else {
        return previusValue
    }
}, 0)
   console.log(numbersArray);
   alert(`Количество чисел: ${numbersArray.length} Сумма: ${result}`);
// ----------------------------------------------------------------------------------------

/*3) Напишите функцию, которая возвращает объект, 
   составленный из значений вложенных массивов. 
   Первое значение - ключ, второе - значение. 
   Ожидаемый результат: [['a', 1], ['b', 2]] ===> { a: 1, b: 2 }
   const data = [['a', 1], ['b', 2]]; 
   console.log(fromPairs(data))  // { 'a': 1, 'b': 2 } */

   const arraysNumbers = [['a', 1], ['b', 2], ['c', 3], ['d', 4]] 
   let objectNumbers = {}
   arraysNumbers.forEach((element) => {
        let key = element[0]
        let value = element[1]
        objectNumbers[key] = value
   })
   console.log(objectNumbers);