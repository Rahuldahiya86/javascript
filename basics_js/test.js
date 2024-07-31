// // ======== variables =============
// //   4 type ways declared variables
// // automatically , let, const, var
// //   ========== let block scope  ===========

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

// //   ========== const block scope  ===========

// {
//     const a = 19;
//     console.log(a)
// }

// //   ========== var global scope  ===========

// var a = 33;
// var a = 44;
// console.log(a)
// {
//     var a = 6;
//     var a = 454;
//     console.log(a)
// }

// // ======== operators ==========
// // airthmatic operators

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

// // assignment operators

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
//  }

 // comparison operators

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

// //  ========== logical operators ==========

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


// ============= ternary operator ===========

// let x = 10
// console.log(x<9? "ok" :"not ok" )

// ========= Datatype ==========
// primitive datatype 7 type = NNBBSSU = null, number, boolean, bigint, string, symbol, undefined

// 
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
// 

// non-primitive datatype = object = key value

// 
//     const item = {
//         "Khem": true,
//         "Anuj": false,
//         "vicky": 44,
//         "Ajay": null,
//     }
//     console.log(item["anuj"])
// 

// ============= conditional statements ================
//  if statement, if else statement, if else if else statement


//
//     let x = "Hello"
//  x = Number.parseInt(x) // converting the string to a number
// console.log(typeof x)
//

// ======== if statement =========
// let a = 250
// if(a<30){
//     console.log('color')


// ======== if else statement =========

// let a = 250
// if(a<30){
//     console.log('color')

// }else(
//     console.log('black color')
// )

// ======== if else if statement =========


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
   
// let x = 20;
// if (x>=18){
//     console.log('you are adult')
// } else{
//     console.log('you are minor')
// }

// let rating = 3.5
// if (rating<=2){
//     console.log('bad')
// } else if(rating>=4){
//     console.log('good')
// }else{
//     console.log('average')
// }
    
// let userLogIn = true;
// let userLogOut = true;
// let usercount = 4;
// if(userLogIn && userLogOut && usercount){
//     console.log('successfully')
// }

// let userLogIn = true;
// let userLogOut = true;
// let usercount = 4;
// if(userLogIn || userLogOut || usercount){
//     console.log('successfully')
// }


// ============practice operators & conditions ============

// let age = prompt('whta is your age')
// if (age<9 && age<20){
//     console.log('your age lies between 10 and 20')
// }
// else{
//     console.log('your age doesnt lies between 10 and 20')
// }
