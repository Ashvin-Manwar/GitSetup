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
function x(){
    var i=1
    setTimeout(function(){
        console.log(i)
    },3000)
}
x()
