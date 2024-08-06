
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

// ==========practice loops=========== 

// ========== Question = #1 — Print the numbers from 0 to 15 =============
// {
//    for(let i = 0; i <= 15; i++){
//       console.log(i);
//    }
// }

// // ========== Question = #2 — Print the numbers from 12 to 24 =============

// {
//    for(let i = 12; i <= 24; i++){
//       console.log(i);
//    }
// }

// // ========== Question = #3 — Print the ODD numbers from 7 to 31 =============

// {
//    for(let i = 7; i <= 31; i++){
//       if(i % 2 !=0){
//            console.log(i)
//       }
//    }
// }

// // ========== Question = #4 — Print the EVEN numbers from 10 to -20 =============

// {
//    for(let i = 10; i >= -20; i--){
//       if(i % 2 ==0){
//            console.log(i)
//       }
//    }
// }

// //  ========== Question = 5 #5 — Iterate through all numbers from 1 to 45. Print the following:
//                                  // For multiples of 3 print “Fizz”
//                                  // For multiples of 5 print “Buzz”
//                                  // For multiples of 3 and 5 print “FizzBuzz” =============

// {
//    for(let i = 1; i <= 45; i++){
//   if(i % 3 == 0 && i % 5 == 0){
//    console.log("For 3,5 : FizzBuzz",i);
//   }else if(i % 5 ==0) {
//    console.log("For 5 : Buzz",i);
//   }else if(i % 3 == 0) {
//       console.log("For 3 : Fizz",i);
//   }
//    }
// }


// // ========== Question = #6 — Print all the elements of the following array =============

// {
//    const heros=["Spiderman", "Betman", "Thor", "Hulk", "Antman"]
//    for(let i = 0; i < heros.length - 1; i++){
//       console.log(heros[i])
//    }
// }

// // ========== Question = #7 — Calculate the sum of all the numbers in the following array =============

// {
//     let num = [1, 12, 22, 123, 43];
//   let sum = 0;
//   for(let i = 0; i < num.length; i++){
//      sum = sum + num[i];
//   }
//   //console.log('This is sum: ' , sum );
//   console.log(`this is sum ${sum}`)
// }

// // ==========practice If else=========== 

// // ========== Question = #1 — Determine If a Number Is Positive =============
// //Write a program that determines whether a given number is positive or not.


// {
//    let a = 5;
//    if( a > 4){
//       console.log(" This Number is positive")
//    }else {
//       console.log("This number is not positive")
//    }
// }

// // ========== Question =  #2 — Check Even or Odd =============
// // Write a program that checks if a number is even or odd.

// {
// let number = 9;
// if ( number % 2 ===0){
//    console.log('this is even number')
// }
// else {
//    console.log('THis is odd number')
// }
// }


// // ========== Question =   #3 — Determine the Greater Number =============
// //Write a program to determine the greater of two numbers.

// {
//    let x = 13;
//    let y = 17;
//    if(x > y){
//       console.log('x is greater')
//    }else{
//       console.log('y is greater')
//    }
// }

// // ========== Question =    #4 — Grade Calculator ============
// //Write a program that assigns a letter grade based on a numerical


// {
//    let number = 73;
//    let grade; 
//    if(number >= 90){
//       console.log('A')
//    }else if(number >= 80){
//       console.log('B')
//    }else if(number >= 70){
//    console.log('C')
//    }else{
//       console.log('D')
//    }
// }

// // ========== Question =  #5 - Ticket Pricing ============
// //Write a program that calculates the ticket price based on age.

// let age = 22;
// let ticketprice;

// if(age < 15){
//   console.log(`ticketprice = ${10}`)
// }else if(age >= 15 && age < 20){
//    console.log(`ticketprice = ${15}`)
// }else if(age >= 20 && age < 25){
//    console.log(`ticketprice = ${20}`)
// }
// else{
//    console.log(`ticketprice = ${30}`)
// }

//    // ========== Question =  #6 - Determine Leap Year ============
//    //Write a program that determines if a year is a leap year.

//    let year = 2024;
   
//    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
//       console.log(year , 'is a leap year')
//    }else{
//       console.log(year, 'is not a leap year')
//    }

//   //============ Question = #7 — Shopping Discount =============
//   //Write a program that calculates a discount based on the purchase amount.


//   let purchaseamount = 150;
//   let discount;

//   if(purchaseamount >= 120){
//    console.log(`discount = ${20} %`)
//   }else if(purchaseamount >= 80){
//    console.log(`discount = ${10} %`)
//   }else{
//    console.log(`discount = ${0} %`)
//   }

//     //============ Question = #8 — Time of Day Greeting =============
//     // Write a program that greets the user based on the time of day.

//     {
//     let time = new Date();
//     let hour = time.getHours();
//     console.log(time)
//     let greeting;
//     if(hour < 12){
//       console.log("Good morning")
//     }else if(hour < 18 )
//     {
//       console.log("Good afternoon")
//     }
//     else{
//       console.log("Good evening")
//     }
//    }


//     //============ Question = #9 —  Number Guessing Game===========
//     // Write a simple number guessing game.

//     {
//       let number = 9;
//       let guess = 8;

//       if(guess === number){
//          console.log("Congratulations! You guessed the correct number.")
//       }else if(guess < number){
//          console.log("Try a higher number.")
//       }
//       else{
//          console.log("Try a lower number.")
//       }
//     }

// // {
// //     const min = 1;
// // const max = 6;
// // console.log(Math.floor(Math.random() * (max - min +1) + min));
// // }


// {
// function myFunction(a , b){
//    x = a*b;
//    return a * b 
// }
// let val = myFunction(33,63)
// console.log(x)
// }


// const sum = (x, y)=>{
//    z = x + y;
//    return z;
//  }
//  let val = sum(43,78)
//  console.log(z)



//  ========== arrays ============
{
let marks = [47, 64, 93, 47, 39, 83]
console.log(marks)
console.log(marks.length)//property
}

{
   let marks = [47, 64, 93, 47, 39, 83]
   marks [0]=66 // change only array marks 
   console.log(marks)
   console.log(marks.length)//property
   }

   {
      let heros =['Thor', 'Spiderman', 'Betman', 'Hulk', 'Loki']
      // using a for loop
      for(let i = 0; i < heros.length; i++){
         console.log(heros[i])
      }
   }
{
      let cities =['Goa', 'Pune', 'Haryana', 'Delhi', 'Mumbai']
      // using an for of loop
      for(let city of cities){
         console.log(city.toUpperCase())
      }
   }

   // ========practice Array ===========
{
   // using for of
   let marks = [85, 97, 44, 37, 76, 60]
  let sum = 0;
  for (let val of marks){
   sum = sum + val
  }
  let avg = sum / marks.length
  console.log(avg)
}
{
   // using for loop
   let marks = [85, 97, 44, 37, 76, 60];
   let sum = 0;
   let count = marks.length;
   for(let i = 0; i < count; i++){
    sum = sum + marks[i]
   }
   let avg = sum / count;
   console.log(avg)

}

{
   let marks = [49, 49, 23, 94, 43]
  let sum = 0;
  let count = marks.length
  for(let i = 0; i < count; i++){
       sum = sum + marks[i];
  }
  let val = sum / count
   console.log(val)
}
{
   let marks = [49, 49, 23, 94, 43];
   let sum = 0;
   for(let val of marks){
      sum = sum + val;
   }
   let value = sum / marks.length
   console.log(value)
}
   
 {
   // Smallest value 
   let marks = [85, 97, 44, 22, 37, 76, 60, 25];

let smallestNumber = marks[0]; //-> 85

for(let i=0; i<marks.length; i++){
 if(smallestNumber > marks[i])
   smallestNumber = marks[i]
}
console.log('smallest value:',smallestNumber);
}

 // Smallest value 
{
   let marks = [5, 55, 95, 34, 3, 30, 30, 48, 27]
   let smallNUM = marks[0];

   for (let i=0; i<marks.length; i++){
      if(smallNUM < marks[i]){
         smallNUM = smallNUM;
      } else{
         smallNUM = marks[i];
      }
   }
   console.log('smallest value:',smallNUM);
}


// 10% offer
{
let items = [250, 645, 300, 900,50];
let i=0; 
for (let val of items){
   console.log(`value of index ${i} = ${val}`);
   let off = val / 10; 
   items[i] -= off;
   console.log(items[i])
   i++
}
}

{
   let items = [500, 645, 200, 990, 510];
   for(let i = 0; i < items.length; i++){
   let offer = items[i] / 10
   items[i] -= offer
   }
   console.log(items);
}

// ========== Array methods =========

// ===push add something end same array mein change krta hai====

{
   let Cartoons = ['Tom', 'Jerry', 'Nobita', 'Sizuka'];
   Cartoons.push('Doraemon', 'Suneo',)
   console.log(Cartoons)
}

// =====pop deleted something end same array me change krta hai=====
{
   let Cartoons = ['Tom', 'Jerry', 'Nobita', 'Sizuka'];
   Cartoons.pop()
   console.log(Cartoons)

}


// ====== to string (change array to string use == toString) new string return krta hai======
{
   let Cartoons = ['Tom', 'Jerry', 'Nobita', 'Sizuka'];
   console.log(Cartoons.toString())
}

// ===== concat ===== (New array create krta hai)

{
   let marvelHeros=['thor', 'drStrang']
   let dc_heros=['spiderman', 'betman']
   let indianHeros=['shaktiman','krish']
   let heros=marvelHeros.concat(dc_heros, indianHeros );
   console.log(heros);
}

//  =====Unshift =====(add something start)
{
let Cartoons = ['Tom', 'Jerry', 'Nobita', 'Sizuka'];
Cartoons.unshift('Doreamon');
console.log(Cartoons)
}

//  =====shift =====(add something start)

let Cartoons = ['Tom', 'Jerry', 'Nobita', 'Sizuka'];
Cartoons.shift();
console.log(Cartoons)

//  =====slice =====(original array k ander change nhi krta)
{
let Cartoons = ['Tom', 'Jerry', 'Nobita', 'Sizuka'];

console.log(Cartoons.slice(0,3))
}

//  =====splice =====(original array k ander add, remove, replace)

{
   let marvelHeros=['thor', 'drStrang','spiderman', 'betman', 'hulk']
    marvelHeros.splice(2,1,"Hello") 
    console.log(marvelHeros)
}

// ====let practice=====

{
   let companies=["Bloomberg", "Microsoft", "Uber", "Google","Ibm", "Netflix"]
   companies.shift();
   console.log(companies);
   companies.splice(1,1,"Ola");
   console.log(companies);
   companies.push('Amazon');
   console.log(companies);
}

// ====== string =======

{
   let str = "helloWorld!";
   let str2 = "hello";
   console.log(str.length)
   console.log(str2.length)
   console.log(str[0])
   console.log(str2[0])
}

// template literals 

{
    let specialString = `This is a template literals`;
    console.log(specialString)
    console.log(typeof specialString)
}

// FOR EXAMPLE double coat & single coat

{
   let obj = {
         item : "pen",
         price : 10,
   }
   console.log("The cost of", obj.item, "is", obj.price)
}


// FOR EXAMPLE haptics
{
      let obj = {
            item : "pen",
            price : 10,
      }
      console.log(`The cost of ${obj.item} is ${obj.price}`)
   
}