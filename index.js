//1
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }
//2
// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }
//3
// for (let i = 1; i <= 100; i++) {
//     if (i % 2==0)
//     console.log(i);
// }
//4
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push('x');
// }
// console.log(array);
//5
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(i + 1);
// }
// console.log(array);
//6
// let arr = [0, 3, 12, 5, 20, 7, -2, 10, 8];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }
//7
// let arr = [0, 3, 12, 5, 20, 7, -2, 10, 8];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     console.log("Элемент 5 найден в массиве");
// } else {
//     console.log("Элемент 5 не найден в массиве");
// }
//8
// let numbers = [1, 2, 3, 4, 5]; 
// let sum = 0; 
// for(let i = 0; i < numbers.length; i++) {  
//     sum += numbers[i];  
// }
// console.log(sum);  
//9
// let numbers = [1, 2, 3, 4, 5]; 
// let sum = 0; 
// for(let i = 0; i < numbers.length; i++) {  
//     sum += numbers[i] ** 2;  
// }
// console.log(sum);  
//10
// let numbers = [1, 2, 3, 4, 5];  
// let sum = 0; 
// for(let i = 0; i < numbers.length; i++) {  
//     sum += numbers[i];  
// }
// let srar = sum / numbers.length;  
// console.log(srar); 
//11
// function factorial(n) {
//     let result = 1;
//     for(let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5)); 
//12
// let array = [];
// for (let i = 10; i > 0; i--) {
//     array.push(i );
// }
// console.log(array);
//13
// let arr = [0, 3, 12, 5, 20, 7, -2, 10, 8];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         console.log(arr[i]);
//     }
// }
//14
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }
//15
// let array = [1, 2, 3, 4, 5];
// for(let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }
//16
// let array = [0, 1, 2, 3, 4, 5];
// for(let i = 0; i < array.length; i++) {
//   if(array[i] === i) {
//     console.log(array[i]);
//   }
// }
//17
// let numbers = [1, 2, 3, 4, 5]; 
// for(let i = 0; i < numbers.length; i++) {
//     document.write(numbers[i] + '<br>');
// }
//18
// let arr = [1, 2, 3, 4, 5]; // ваш массив чисел
// for(let i = 0; i < arr.length; i++) {
//     document.write('<p>' + arr[i] + '</p>');
// }
//19
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 'Суббота' ||arr[i] === 'Воскресенье') {
//         document.write('<b>' + arr[i] + '</b><br>');
//     } else {
//         document.write(arr[i] + '<br>');
//     }
// }
//20
// let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']; 
// let day = new Date().getDay(); 
// for(let i = 0; i < daysOfWeek.length; i++) {
//     if(i === day - 1) { 
//         document.write('<i>' + daysOfWeek[i] + '</i> <br>');
//     } else {
//         document.write(daysOfWeek[i] + '<br>');
//     }
//21
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let key in obj) {
//     obj[key] = obj[key] * 1.1;
// }
// console.log(obj)
//22
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let key in obj) {
//     if (obj[key] <= 400) {
//         obj[key] = obj[key] * 1.1;
//     }
// }
// console.log(obj);
//23
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = arr1.reduce((acc, curr, index) => {
//     acc[curr] = arr2[index];
//     return acc;
// }, {});
// console.log(obj);
//24
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let keysSum = Object.keys(obj).reduce((sum, key) => sum + Number(key), 0);
// let valuesSum = Object.values(obj).reduce((sum, value) => sum + value, 0);
// let result = keysSum / valuesSum;
// console.log(result);
//25
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let keys = Object.keys(obj);
// let values = Object.values(obj);
// console.log(keys); 
// console.log(values); 
//26
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let values = Object.values(obj);
// let filteredValues = values.filter(value => value.toString().startsWith('1') || value.toString().startsWith('2'));
// console.log(filteredValues); 
//27
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = arr.reduce(function(acc, cur, index) {
//     acc[index + 1] = cur;
//     return acc;
// }, {});
// console.log(obj); 
//28
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = arr.reduce(function(acc, cur, index) {
//     acc[cur] = index + 1;
//     return acc;
// }, {});
// console.log(obj); 











