
// //  // ======== variables =============
// //  //   4 type ways declared variables
// //  // automatically , let, const, var
// //  //   ========== let block scope  ===========

// {
//     let a = 10;
//     let b = 12;
//     let c = a + b;
//     console.log(c)
// }
// {
//     let a = 15;
//         a = 23;
//         console.log(a)
// }

// // //  ========== const block scope  ===========

// {
//     const a = 19;
//     console.log(a)
// }

// // //  ========== var global scope  ===========

// var a = 33;
// var a = 44;
// console.log(a)
// {
//     var a = 6;
//     var a = 454;
//     console.log(a)
// }

// // // ======== operators ==========
// // // airthmatic operators

// {
//     let a = 55;
//     let b = 3;
//     console.log("a + b =", a+b)
//     console.log("a - b =", a-b)
//     console.log("a / b =", a/b)
//     console.log("a * b =", a*b)
//     console.log("a ** b =", a**b)
//     console.log("a % b =", a%b)
//     console.log("++a =", ++a)
//     console.log("--a =", --a)
    
// }

// // //assignment operators

//  {
// let a = 1;
//  a += 5;
//  console.log(a)
//  let b = 1;
//  b -= 5;
//  console.log(b)
//  let c = 1;
//  c /= 5;
//  console.log(c)
//  let d = 1;
//  d *= 5;
//  console.log(d)
//  let e = 1;
//  e %= 5;
//  console.log(e)
//  let f = 1;
//  f %= 5;
//  console.log(f)
//   }

// //  // comparison operators

//  {
//     let comp1 = 30;
//     let comp2 = 22;
//     console.log("comp1 == comp2", comp1 == comp2)
//     console.log("comp1 != comp2", comp1 != comp2)
//     console.log("comp1 === comp2", comp1 === comp2)
//     console.log("comp1 !== comp2", comp1 !== comp2)
//     console.log("comp1 < comp2", comp1 < comp2)
//     console.log("comp1 > comp2", comp1 > comp2)
//     console.log("comp1 <= comp2", comp1 <= comp2)
//     console.log("comp1 >= comp2", comp1 >= comp2)
//  } 

// // //  ========== logical operators ==========

// {
//     let x = 10;
//     let y = 5;
//     console.log(x>y && x==10)
// }
// {
//     let x = 10;
//     let y = 5;
//     console.log(x>y || x==10)
// }
// {
//     let x = 10;
//     let y = 5;
//     console.log(!x>y)
// }


// // // ============= ternary operator ===========

// { let x = 10
// console.log(x<9? "ok" :"not ok" ) }

// // // ========= Datatype ==========
// // // primitive datatype 7 type = NNBBSSU = null, number, boolean, bigint, string, symbol, undefined

// {
//     let a = null;
//     let b = 123;
//     let c = true; // false
//     let d = BigInt (324) + BigInt(55)
//     let e = "hello";
//     let f = Symbol("Hello World")
//     let g;
//     console.log(a, b, c, d, e, f, g)
//     console.log(d)
//     console.log(typeof c)
// }


// // // non-primitive datatype = object = key value

// { 
//     const item = {
//         "Khem": true,
//         "Anuj": false,
//         "vicky": 44,
//         "Ajay": null,
//     }
//     console.log(item["anuj"])
// }


// // // // ============= conditional statements ================
// // // //  if statement, if else statement, if else if else statement


// {
//     let x = "Hello"
//  x = Number.parseInt(x) // converting the string to a number
// console.log(typeof x)
// }

// // // ======== if statement =========
// {
// let a = 25
// if(a<30){
//     console.log('color')
//    }
//  }


// // // // ======== if else statement =========
// {
// let a = 250
// if(a<30){
//     console.log('color')

// }else(
//     console.log('black color')
// )
// }

// // // // ======== if else if statement =========

// {

// let balance = 100;
// if (balance<500){
//     console.log('less then 500')
// } else if(balance<750)
// {
//     console.log('less then 750')
// }else if(balance<950){
//     console.log('less then 950')
// }else{
//     console.log('less then 1200')
// }

// }

//    {
// let x = 20;
// if (x>=18){
//     console.log('you are adult')
// } else{
//     console.log('you are minor')
// }
//    }


// {
// let rating = 3.5
// if (rating<=2){
//     console.log('bad')
// } else if(rating>=4){
//     console.log('good')
// }else{
//     console.log('average')
// }
// }

// {
// let userLogIn = true;
// let userLogOut = true;
// let usercount = 4;
// if(userLogIn && userLogOut && usercount){
//     console.log('successfully')
// }
// }

// {
// let userLogIn = true;
// let userLogOut = true;
// let usercount = 4;
// if(userLogIn || userLogOut || usercount){
//     console.log('successfully')
// }
// }


// // // ============practice operators & conditions ============

// // {
// // let age = prompt('whta is your age')
// // if (age<9 && age<20){
// //     console.log('your age lies between 10 and 20')
// // }
// // else{
// //     console.log('your age doesnt lies between 10 and 20')
// // }
// // }

// {
// let age = 13;
// switch (age){
//     case 10:
//     console.log('your age is 10')
//     break
//     case 11:
//     console.log('your age is 11')
//     break
//     case 12:
//     console.log('your age is 12')
//     break
//     case 13:
//     console.log('your age is 13')
//     break
//     default:
//     console.log('your age is not special')
// }
// }

// // ============= loops =================

// // // ======= for loop =========
// {
// for (let i = 0 ; i < 20; i++){
//     console.log(i)
// }
// }

// {
// let sum = 0;
// let n = 6;
// for (let i = 0 ; i <= n ; i++){
//   sum = sum + i;
// }
// console.log('sum=', sum)
// }

// {
// let car = ['Volvo', 'BMW', 'Scoda', 'Ford', 'Fiat']
// for (let i = 0; i < car.length; i++) {
//        console.log(car[i]);
//     }
//    }


// // // ============= while loop =============

// {
// let car = ['Volvo', 'BMW', 'Scoda', 'Ford', 'Fiat' , 'maruti']

// let i = 0
// while(i <= car.length){
//  console.log(car[i])
//  i++
// }
// }

// // //  ============== do while loop ==============

// {
// let car = ['Volvo', 'BMW', 'Scoda', 'Ford', 'Fiat' , 'maruti']

// let i = 0
// do{
//    console.log(car[i])
//    i++;
// }while(i <= car.length);
// }

// // // ============== for-of loop val return kre ga =============

// {
// let str = "Khemsingh"

// for(let i of str) // iterator
//    {
//    console.log('i=',i);
// }
// }


// // ============== for-in loop key return kre ga   =============

// {
// let student ={
//    Name : 'Khem singh',
//    Class : 12,
//    Age : 18,
//    Marks : 33,
//    isPass : true,
// }
// for(let key in student){
//    console.log('key=',key,'value =',student[key])
// }
//  }

// // //  ========== practice =========
//  for ( num = 0 ; num <= 100 ; num++){
//    if(num % 2 === 0 ){
//          //even number 
//          console.log(num)
//       }
//  }

//  for ( num=0 ; num<=100 ; num++){
//    if(num % 2 !== 0 ){
//          //odd number 
//          console.log(num)
//       }
//  }

// //  {
// //  let game = 33;
// //  let user = prompt('hello');

// //  while(game != user){
// //    user = prompt('wrong');
// //  }console.log('good');
// // }

// {
//  let myArray = ['Spidermen', 'thor', 'betmen']
//  for(let key in myArray){
//        console.log('key=',key,'value =',myArray[key])
//     }
//    }

//    {
//     let myArray = ['Spidermen', 'thor', 'betmen']
//     for(let i = 0; i < myArray.length; i++){
//       console.log(i,myArray[i])
//     }
//    }
 
//    {
//    for(let i=1; i<=20; i++){
      
//       if(i == 11){
//          console.log(`11 value dtected ${i}` )
//         // break
//          // continue
//       }
//       console.log(i)
//    }
// }
 
// //    // ========== function ===========
// {
//    function myFunction(){
//       console.log('Hello World!');
//    }
//    myFunction();
// }


// {
//    function myFunction(msg){
//       //parameter input
//       console.log(msg);
//    }
//    myFunction('Hello world');
// }


// {
//    function sum(x, y){
//       console.log(x * y)
//    }
//    sum(53, 24)
// }

    
//   {
//    function mul(x, y){
//         mul = x * y;
//         return mul;
//       }
//       let val = mul(53, 24)
//       console.log(val)
//    }

// {
//   let myArray=['44','54', '65', '54', '22']
//     const newArr = myArray[2] * 2 ;
//     console.log(newArr)
//    }

// // //   =============Arrow Function=============
// // // ======== sum function ========
// // // modern js

// {
//    let arrowSum=(a, b)=>{
//    console.log(a + b);
// };
// arrowSum(4, 8)
//  }

// // // // ======== multiplication function ========
// // // // modern js

// {
// let arrowMul=(a, b)=>{
//    console.log(a * b);
// };
// arrowMul(4, 8);
// }

// {
// let age= 18;

// if(age <= 17){
//    console.log("minor")
// }
// else{
//    console.log("adult")
// }
// }

// ==========practice function=========== 

// ========== Question = #1 — Print the numbers from 0 to 15 =============
{
   for(let i = 0; i <= 15; i++){
      console.log(i);
   }
}

// ========== Question = #2 — Print the numbers from 12 to 24 =============

{
   for(let i = 12; i <= 24; i++){
      console.log(i);
   }
}

// ========== Question = #3 — Print the ODD numbers from 7 to 31 =============

{
   for(let i = 7; i <= 31; i++){
      if(i % 2 !=0){
           console.log(i)
      }
   }
}

// ========== Question = #4 — Print the EVEN numbers from 10 to -20 =============

{
   for(let i = 10; i >= -20; i--){
      if(i % 2 ==0){
           console.log(i)
      }
   }
}

//  ========== Question = 5 #5 — Iterate through all numbers from 1 to 45. Print the following:
                                 // For multiples of 3 print “Fizz”
                                 // For multiples of 5 print “Buzz”
                                 // For multiples of 3 and 5 print “FizzBuzz” =============

{
   for(let i = 1; i <= 45; i++){
  if(i % 3 == 0 && i % 5 == 0){
   console.log("For 3,5 : FizzBuzz",i);
  }else if(i % 5 ==0) {
   console.log("For 5 : Buzz",i);
  }else if(i % 3 == 0) {
      console.log("For 3 : Fizz",i);
  }
   }
}


// ========== Question = #6 — Print all the elements of the following array =============

{
   const heros=["Spiderman", "Betman", "Thor", "Hulk", "Antman"]
   for(let i = 0; i < heros.length - 1; i++){
      console.log(heros[i])
   }
}

// ========== Question = #7 — Calculate the sum of all the numbers in the following array =============

{
    let num = [1, 12, 22, 123, 43];
  let sum = 0;
  for(let i = 0; i < num.length; i++){
     sum = sum + num[i];
  }
  console.log('This is sum: ' +sum );
}