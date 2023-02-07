// var n=2;
// function square(num){
//     var ans=num*num;
//     return ans;
// }
// var square2 =square(n);
// var square4 =square(4);
// // console.log(square2);

// var x=7
// function getName(){
//     console.log("Ashvin Manwar")
// }
// // getName()
// // console.log(x)
// console.log(getName)

// var x=1
// a()
// b()
// console.log(x)
// function a(){
//     var x=10
//     console.log(x)
// }
// function b(){
//     var x=100
//     console.log(x)
// }

// //lec6
// var a
//  console.log(a)
//  a="hellow world"
//  console.log(a)
//  a=10
//  if(a===undefined){
//     console.log("a is undefined")
//  }else{
//     console.log("a is not undefined")
// }
//     //lec 7
// function a(){
//     var b=10
//     c()
//     function c(){
//     console.log(b)
// }
// }
// a()
// console.log(b)

//lec 8 Let & Const
// let a=10
// console.log(a)
// var b=100

//lec 9  Block Scope >
// var a=100
// let b=200
// const c=300
// {
//     //compound Statement OR block
//     var  a=10
//     let b=20
//     const c=30
// console.log(a)
// console.log(b)
// console.log(c)

// }
// console.log(a)
// console.log(b)
// console.log(c)

//lec 10 CLOSURES
// function z() {
//   var b = 800;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     // a=100
//     y();
//   }
//   x();
// }
// z();
// // // x()
// // var z=x()
// // console.log(z)
// // z()// >7

//lec 11 Closures time
// function x(){
//     var i=1
//     setTimeout(function(){
//         console.log(i)
//     },3000)
// }
// x()

// function x(){
//     for(let i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)//1 2 3 4 5 output
//    }
// }
// x()
// function x(){
//     for(let i=1;i<=5;i++){
//         function close(i){
//          setTimeout(function(){
//           console.log(i)
//          },i*1000)
//        }
//        close(i)
//     }
// }
// x()

//lec 12
// function outer(){
//     var a=10
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }
// // outer()()
// var close=outer()
// close()

// function outer(b){
//     function inner(){
//         console.log(a,b)// 10 Hello world
//     }
//     let a=10
//     return inner
// }
// // outer()()
// var close=outer("Hello World")
// close()

// function outest(){
//     var c=20
// function outer(b){
//     function inner(){
//         console.log(a,b,c)
//     }
//     let a=10
//     return inner
// }
// return outer
// }
// // outer()()
// var close=outest()("Hello World")
// close()

//hiding data
// function counter(){
//     var count=0
//     return function incrementCounter(){
//         count++
//         console.log(count)
//     }
// }
// var counter1=counter()//acces the counter
// counter1()
// counter1()

// var counter2=counter()
// counter2()
// counter2()
// counter2()

// function Counter(){
//         var count=0
//        this.incrementCounter=function(){
//             count++
//             console.log(count)
//         }
//         this.decrementCounter=function(){
//             count--
//             console.log(count)
//         }
//     }
//     var counter1=new Counter()
//     counter1.incrementCounter()
//     counter1.incrementCounter()
//     counter1.decrementCounter()

// lec 13 Anonymous Function

//Function Statement aka Function Declaration
// function a(){
//     console.log("a called")
// }

//Function Expression

// var b=function (param1,param2){
//     console.log("b called")
// }
// a()
// b()
// xyz()

//Anonymous Function
// function(){
// }
    
// const b=function(param1){

//     return function xyz(){

//     }
// }
//  console.log(b())

//Named Function Expression
//Difference btw Parameter & Argument ?
// First Class Function-Ability tio be used  like values
// Arrow Function

//lec 14 call back
//what is call back function in js
// setTimeout(function(){
//     console.log("timer")
// },5000)
//  function x(y){
//     console.log("x")
//     y()
//  }
//  x(function y(){
//     console.log("y")
//  })

//  JS is a synchronous an dsingle threded language

// console.log("Start")
// setTimeout(function cb(){
//    console.log("Callback")
// },5000)
// // console.log("END")
// function attachEventListener(){
//    let count=0
//    console.log("Start")
//    document.getElementById("clickMe").addEventListener("click",function cb(){ 
//       console.log("Callback",++count)
//    },)
//    console.log("END")

// }
// attachEventListener()
// //lec 15
// function a(){
// console.log('a')
// }
// a()
// // console.log('end')
// console.log('start')
// setTimeout(function cb(){
//    console.log('Callback')
// },5000)

// // console.log('End')
// console.log("Start")
//    document.getElementById("clickMe").addEventListener("click",function cb(){ 
//       console.log("Callback")
//    })
//    console.log("END")
//lec 18
const radius=[3,1,2,4]
//  const calculateArea=function (radius){
//     const output=[]
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI*radius[i]*radius[i])        
//     }
//     return output
//  }
//  console.log(calculateArea(radius))

//  const calculateCircumferance=function (radius){
//     const output=[]
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2*Math.PI*radius[i]*radius[i])        
//     }
//     return output
//  }
//  console.log(calculateCircumferance(radius))

//  const calculateDiameter=function (radius){
//     const output=[]
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2*radius[i])        
//     }
//     return output
//  }
//  console.log(calculateDiameter(radius))

// const area= function(radius){
//     return Math.PI*radius*radius
// }

// const Circumferance= function(radius){
//     return 2*Math.PI*radius*radius
// }

// const Diameter= function(radius){
//     return 2*radius
// }
// // const calculate=function (radius,logic){
// //         const output=[]
// //         for (let i = 0; i < radius.length; i++) {
// //             output.push(logic(radius[i]))        
// //         }
// //         return output
// //      }
// Array.prototype.calculate=function (logic){
//     const output=[]
//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[i]))        
//     }
    // return output
//  }
//      console.log(radius.map(area))
//      console.log(radius.calculate(area))
    //  console.log(calculate(radius,area))
    //  console.log(calculate(radius,Circumferance))
    //  console.log(calculate(radius,Diameter))
// const arr=[5,1,3,2,6]
// function double(x){
//     return x*2
// }
// function triple(x){
//     return x*3
// }


// const output=arr.map(double)//[10, 2, 6, 4, 12]
// const output=arr.map(triple)//[15, 3, 9, 6, 18]

// part 1
// const output=arr.map(function binary(x){
//     return x.toString(2)
// })
// part 2
// const output=arr.map((x)=> x.toString(2))
// //['101', '1', '11', '10', '110']
// console.log(output)

// const arr=[5,1,3,2,6]
// //filter odd value

// function isOdd(x){
//     return x%2
// }
// function isEven(x){
//     return x%2===0
// }
// const outputOdd=arr.filter(isOdd)
// const output=arr.filter(isEven)

// console.log(outputOdd)
// console.log(output)

// const arr=[5,1,3,2,6]
// //sum max
// function findSum(arr){
//     let sum=0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum+arr[i];     
//     }
//     return sum
// }   
// console.log(findSum(arr))  //17

// function findMax(arr){
//         let max=0
//         for (let i = 0; i < arr.length; i++) {
//             if(arr[i]>max)
//             max=arr[i]                            
//        }   
//         return max
// }
//     console.log(findMax(arr))  //17

// const output=arr.reduce(function(acc,curr){//REDUCE fUNCTION
//     acc +=curr
//     return acc
// },0)
// console.log(output)//17

// const output=arr.reduce(function(max,curr){
//     if(curr >max)
//         max=curr
//         return max
// },0)
// console.log(output)

const users=[
    {firstName:'Ashvin',lastName:'Manwar',age:26},
    {firstName:'Donald',lastName:'Trumph',age:75},
    {firstName:'Elon',lastName:'Musk',age:55},
    {firstName:'Deepika',lastName:'padukon',age:26},
]

// List o f full name

// const output= users.map((x) => x.firstName +" "+x.lastName)

// console.log(output)// ['Ashvin Manwar', 'Donald Trumph', 'Elon Musk', 'Deepika padukon']

// const output=users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//     acc[curr.age]=++ acc[curr.age]
//     }
//     else{
//      acc[curr.age]=1   
//     }
//     return acc
// },{})

// console.log(output)//26: 2, 55: 1, 75: 1}
 
// const output=users.filter((x) => x.age <30)
// console.log(output)
// (2) [{…}, {…}]0:{firstName: 'Ashvin', lastName: 'Manwar', age: 26}
// 1:{firstName: 'Deepika', lastName: 'padukon', age: 26}
// length:2

 
const output=users.filter((x) => x.age <30).map((x)=>x.firstName)
console.log(output)
