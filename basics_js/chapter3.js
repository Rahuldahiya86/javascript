//  ======= chapter 3 =======
//  == Loop & Function ==

// for loop
// === n natural number ====
// sum = 0;
// let n = 5;
// for (let i = 0; i < n; i++) {
//   sum += (i+1);

// console.log('sum of first ' ,n, 'natural number is', sum);
// }

// for in loop
// let obj = {
//     sahil: 39,
//     vicky: 49,
//     vijay: 69,
//     vibhu: 33,
//     abhi: 34
// }
// for (let val in obj){
//     console.log("Marks of",val,"are",obj[val])
// }

// for in loop use object
// let obj = {
//     sahil: 39,
//     vicky: 49,
//     vijay: 69,
//     vibhu: 33,
//     abhi: 34
// }
// for (let val in obj){
//     console.log("Marks of",val,"are",obj[val])
// }

// for in loop use array
// let arr = [12,1243,13241,123,123,4535,4356,2342]
// for (let i in arr){
//     console.log("i is",i, "value is", arr[i])
// }


// let student={
//     name : 'Rahul',
//     class : 12,
//     age : 20,
//     ispass: true
// }

// for(let x in student){
//     console.log(`${x},${student[x]}`)
// }

// While loop

// let x = prompt('Enter the value of x');

// let i = 0;
// while(i<x){
//     console.log(i)
//     i++
// }

// do while loop
// let x = prompt('Enter the value of x');

// let i = 0;
// do{
//     console.log(i)
//     i++
// }while(i<x);

// Function // round logic (math.round)
// function myFunction(x, y) {
//     return 1 + (x * y) / 3;
//   }
//   console.log(myFunction(2, 3));
  
//   // arrow Function // round logic (math.round)
//   const sum = (a, b) => {
//     return Math.round(1 + (a * b) / 4);
//   };
//   console.log(sum(2, 3));


//   ======= practice =========

// for loop se
// let marks = {
//     Anky : 33,
//     Anuj : 4,
//     Vinay : 30,
//     Khem : 98
// }
// for(let i =0; i<Object.keys(marks).length;i++){
//  console.log("the marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
// }

//for in loop se
// let marks = {
//       Anky : 33,
//       Anuj : 4,
//       Vinay : 30,
//       Khem : 98
//   }
//   for(let key in marks){
//     console.log("The marks of "+key+" are "+marks[key])
//   }

  // 2nd question
 
// let x = 4;
// let i;
// while (i != x) {
//   i = prompt("guess the correct number");
// }
// console.log("You have enter a correct number");

//3 rd question

// const mean=(a,b,c,d,e)=>{
//   return (a+ b+ c+ d+ e)/3
// }
// console.log(mean(20, 56, 93, 58, 90))

  