// ====== arrays ======

// let array =[39, 74, 38, 57, false, "Hello"]
// array[1] = 21; // change the value of an array
// array[6] = 87; // Adding a value of an array
// console.log(array[0]) ;
// console.log(array[1]) ;
// console.log(array[2]) ;
// console.log(array[3]) ;
// console.log(array[4]) ;
// console.log(array[5]) ;
// console.log(array)
// console.log("The length of ",array.length) // check length
// console.log(typeof array)

// for(let i = 0 ; i<array.length; i++){
//     console.log(array[i])
// }

// === arrays methods ===

// let x = [49, 58, 87, 89, 65, "Hello"]
// let y = x.toString() // convert to string
// console.log(x)
// console.log(y)
// console.log(typeof y)
// let z = x.join("_") // add something & new array return...............
// console.log(x)
// console.log(x,z)
// console.log(typeof z)
// let a = x.pop() // pop return the popped element
// console.log(x)
// console.log(x,a)
// let b = x.push("90") // push return the new array length.................
// console.log(x)
// console.log(x,b)
// let c = x.shift() // remove an element from the start of the array
// console.log(x)
// console.log(x,c)
// let d = x.unshift(78) // add an element from the start of the array 
// console.log(x)
// console.log(x,d)

// let x = [90, 89, 43, 54, 67, 78, 65, 64]
// delete x[0] // remove an element but not change length
// console.log(x) 

// let x = [90, 89, 43]
// let y = ['Anky', 'Vinay']
// let z = [true,false]
// let a = x.concat(y, z) // return an new array
// console.log(a)

// ====. sort method =======
// let compare = (a, b) =>{
//     return b - a
// }
// let arr=[456, 465, 54, 24, 56, 95, 98, 54]
// arr.sort(compare) // compare function 
// // sort() method is used to sort an araay alphabetically // example 1, 11, 2, 3, 34, 5, 66
// console.log(arr)  // sort() method change original method

// ======= slice , splice =======
 
// let arr=[456, 465, 54, 24, 56, 95, 98, 54]
// let deletedvalue = arr.splice(2,3,43,1111,2222,3333) // add position & no of delete element & add elements
// console.log(deletedvalue) 
// console.log(arr) 

// let sli = [3, 4, 5, 7, 5, 9]
// console.log( sli.slice(1,3)) // creat a new array
// console.log(sli)

// ====== arrays & loops ======

// let num = [32, 45, 76, 54, 56, 23]
// for(let i = 0; i < num.length; i++){
//     console.log(num[i])
// }


// for each loop
// let num = [32, 45, 76, 54, 56, 23]
// num.forEach((element)=>{
//     console.log(element+element)
// })

// Array.from

// let Name = "Khem"
// let arr = Array.from(Name)
// console.log(arr)

// for of 

// let num = [32, 45, 76, 54, 56, 23]
// for (let arr of num){
//     console.log(arr)
// }

// for in

// let num = [32, 45, 76, 54, 56, 23]
// for (let arr in num){
//     console.log(arr) 
//     console.log(num[arr]) 
// }


// ===== map , filter, reduce ====

// ==== array map method ====

// let num = [32, 45, 76, 54, 56, 23]

// let a = num.map((value, index , array)=>{
//     console.log(value, index, array)
//     return value + 4
// })
// console.log(a) // return new array

// array filter method

// let marks = [2, 4, 95, 3, 45, 15, 5]
// let x = marks.filter((a)=>{
//     return a > 10
// }) 
// console.log(x) // new array if the condition is true then return value

// array reduce method

// 1st type

// let marks = [2, 4, 95, 3, 45, 15, 5]
// const reduc_fun = (h1, h2) =>{
//   return h1 + h2
// }
// let newarr = marks.reduce(reduc_fun)
// console.log(newarr)
// console.log(marks)

// 2nd type

// let marks = [2, 4, 95, 3, 45, 15, 5]
// let newarr = marks.reduce((a, b)=>{
//     return a + b
// })
// console.log(newarr)

// ==== chapter 5 practice ====

// ==== practice - 1 ====
// let num = [32, 45, 76, 54, 56, 23]
// let a = prompt('Enter a number')
// a = Number.parseInt(a)
// num.push(a)
// console.log(num)

// let num = [32, 45, 76, 54, 56, 23]
// let a = num.push(48)
// console.log(num,a)

// ==== practice - 2 ====

// let num = [32, 45, 76, 54, 56, 23] 
// let a;
// do{
//     a = prompt('Enter a number')
//     a = Number.parseInt(a)
// }while(a != 0)
//     console.log(num)

// ==== practice - 3 ====

// let num = [32, 45, 76, 54, 56, 30, 33, 2, 4, 60, 67] 
// let n = num.filter((x)=>{
//     return x%10 == 0
// })
// console.log(n)

// ==== practice - 4 ====

// let num = [32, 45, 76, 54, 56, 30, 33, 2, 4, 60, 67] 
// let n = num.map((x)=>{
//     return x*x
// })
// console.log(n)

  











