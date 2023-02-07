/*У меня есть небольшие вопросы, если скажите,
как улучшить Задачи 5 - не знаю, ощущение, что неверно сделал или плохо.
Так же задача 12, в конце получается NaN, как можно убрать этот NaN?
Правильно ли я проверил через Includes и насколько встречаема данная практика,
либо надо по другому. Буду благодарен за ответы. Так же, если есть какие-то задачи,
в которых нужно улучшение!*/
// ! Задача 1
let arr = [1, 5, 4, 10, 0, 3];
for (let i of arr) {
  if (i == 10) {
    console.log(i);
    break;
  }
}
// ! Задача 2

let arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.length - 2);

// ! Задача 3

let arr3 = [1, 3, 5, 10, 20];
console.log(arr3);
arr3 = arr3.join("");
console.log(arr3);

// ! Задача 4

let evenNumbers = [];
let numbers = [];
for (let _ = 0; _ <= 10; _++) numbers.push(Math.floor(Math.random() * 11));
console.log(numbers);
for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
console.log(evenNumbers);
// ! Задача 5

let arr5 = [];
for (let i = 0; i < 3; i++) {
  let arrayWrapper = [];
  for (let j = 0; j < 3; j++) {
    arrayWrapper.push(1);
  }
  arr5.push(arrayWrapper);
}
console.log(arr5);
// ! Задача 6

let arr6 = [1, 1, 1];

arr6.push(2, 2, 2);

console.log(arr6);

// ! Задание 7

let arr7 = [9, 8, 7, "a", 6, 5];

arr7 = arr7.sort();
arr7.pop();
console.log(arr7);

// ! Задание 8

let arr8 = [9, 8, 7, 6, 5];
let haveTo = Number(prompt("Введите число от 0 до 10"));
if (arr8.includes(haveTo)) {
  console.log(`в массиве есть значение ${haveTo}`);
} else {
  console.log("данного значения нет");
}

// ! Задание 9

let arr9 = ["abcdef"];
arr9 = arr9.join("");
console.log(arr9);

// ! Задание 10

let arr10 = [];
for (let i = 0; i < 6; i++) {
  let key = Math.floor(Math.random(i) * 11);
  key = arr10.push(key);
}
console.log(arr10);
let x = 0;
let sum = 0;
for (let i = 0; i < arr10.length; i++) {
  x = x + arr10[i];
  sum = x / 6;
}
console.log(sum);

// console.log(arr10.map((i) => ((x += i), (s = x / 6)), (x = 0)).reverse()[0]);

// ! Задание 11

let arr11 = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(arr11.flat(2));

// ! Задание 12

let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr12.length; i++) {
  let sum = 0;
  if (arr12[i + 1]) {
    sum = arr12[i + 1] + arr12[i];
  }
  console.log(sum);
}
