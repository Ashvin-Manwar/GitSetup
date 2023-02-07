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
// console.log("END")

console.log("Start")
document.getElementById("btn").addEventListener("click",function cb(){ 
   console.log("Callback")
},5000)
console.log("END")

