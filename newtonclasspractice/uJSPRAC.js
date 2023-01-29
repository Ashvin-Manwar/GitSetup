// lec 11
// console.log( "Hello world" )
// console.log( 200 )
// console.log( true )
// console.log( null )
// var num = 10
// console.log( num )
// console.log( "string", 10.11, true, false, null, num )

// // //lec 12
// function makeCoffee( sugar, milk )
// {
//     var instructions = "Boil water,";

//     instructions += " pour into cup,";

//     instructions += " add coffee granules,";

//     instructions += " add " + sugar + " spoons of sugar,";

//     instructions += " add " + milk + "% milk.";

//     return instructions;
// }

// console.log( makeCoffee( 2, 20 ) );

//lec 13
// var car = {
//     color :'red' ,
//     speed :200 ,
//     drive : function(){ return 'drive'}// method

// }
// var shoppinglist=[
//     "Apple",
//     "oranges",
//     "pear"
// ]

// //lec 14 embeded obj and Array
// var car = {
//   make: "volvo",
//   speed: 160,
//   engine: {
//     size: 2.0,
//     make: "bmw",
//     fuel: "petrol",
//     piston: [{ maker: "bmww" }, { maker: "bmw" }],
//   },
//   drive:function(){
//     return "drive"
//   }
// };

// var array = [
//     "string",
//     100,
//     ["embeded",200],
//     { car: "Ford"},
//     function(){
//         return "drive"
//       }
// ]

//lect 15
// //menber Acces
// var car = {
//     make: "volvo",
//     speed: 160,
//     engine: {
//       size: 2.0,
//       make: "bmw",
//       fuel: "petrol",
//       piston: [{ maker: "AUDI" }, { maker: "BMW" }],
//     },
//     drive:function(){
//       return "drive"
//     }
//   };
//   var array = [
//         "string",
//         100,
//         ["embeded",200],
//         { car: "Ford"},
//         function(){
//             return "drive"
//           },
//           "new value"
//      ]

//     // console.log(car.make)
//     // Assignment
// array[0] = "New string";

// // Methods
// array.shift(); // Delete's first element
// array.pop(); // Delete's last element

// // Add new values to the beginning of the array
// array.unshift( "new", "values" );

// // Add new values to the end of the array
// array.push( "ending", "values" );

// // Splice can do anything remember
// // splice( point, delete, add values... )
// array.splice( 2, 2, "new elemets", [], {}, 200, 300, function(){} );
// Splice add value
// array.splice(1,0,"hello",200,300)

// replace
//array.splice(2,2,"world200")
// it deleted the 2 places an dreplacxe with "world200"

//lec 19 Callable Objects
// function name( fullname )
// {
//     return fullname.firstname + fullname.lastname;
// }

// // Where there are objects...
// var name1 = { firstname: "Lawrence", lastname: "Turton"  };

// const name2 = { firstname: "John", lastname: "Doe"  };

// console.log(
//     name( name1 ),
//     name( name2 )
// );

// // There are callable objects
// function embed( run )
// {
//     return run();
// }

// var name3 = function() { return "John Lock"  };

// const name4 = function() { return "Stephanie Lock" };

// console.log(
//     embed( name3 ),
//     embed( name4 )
// );

// function name()
// {
//   var fullname="Ashvin Manwar"

//   function concat(name)
//   {
//     return "Mr."+name
//   }
//   return  concat(fullname)
// }

// function name( fullname )
// {
//     return fullname.firstname + fullname.lastname;
// }
// console.log(
//   name({firstname:"Ashvin",lastname:"Manwar"})
// )

// // var obj =[{}]

// function name(fullname){
//   return fullname()
// }

// console.log(
//   name(function(){
//     return "embed"
//   })
// )

// //lec 20 memory Hoisting
// console.log(myName,printName())

// var myName="Ashvin"
// function printName()
// {
//     console.log( a, embed() );
//     // console.log(a)

//     var a = 100;

//     function embed(){ return "hello"; }

//     return "John Doe";
// }
//
// //21 sCOPE AND cLOSURE

// var engine = {
//   maker: "Ford",
//   headGasket:{
//       maker: "Golf",
//       pots:[
//           "piston1",
//           "piston2"
//       ]
//   }
// };

// function runExpression()
// {
//   var a = 10;

//   function add(b)
//   {
//       return a + b;
//   }
//     console.log(
//       add(90),
//       add(20)
//   );
// }
// //lec 22 Inferred Global & Scope
// var engine = {
//   maker: "Ford",
//   headGasket:{
//       maker: "Golf",
//       pots:[
//           "piston1",
//           "piston2"
//       ]
//   }
// };

// function runExpression()
// {
//   var a = 10;

//   function add()
//   {
//       // Scoped engine
//       // var engine = "New engine";

//       // Inferred globals
//       console.log( engine, a );

//       // Clobbering the global scope
//       test = "new stirng";
//       test2 = "new string 2";
//       test3 = "new string 3";
//   }

//   add();
// }
//lec 23 THi sContext
//console.log( this );

// var object = {
//   prop: this,
//   // embed:
//   // {
//       method: function(){ return this; }
//   // }
// };

// var array = [
//   this,
//   function(){ return this; }
// ];

// function global(){
//   return this;
// }

// // Normal invokation
// global();
// object.embed.method();
// array[1]();

// // Assign context
// global.call( object );
// object.embed.method.call( object );
// array[1].call( object );

// // New context
// new global();
// new object.embed.method( object );
// new array[1]();
//lec 24 constructor
// function Apple( x, y, color, score )
// {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.score = score;
// }
//     Apple.prototype={
//       eat: function(){return "eat the apple"},
//       throw: function(){return " throw the apple"}
//     }
// var apple1 = new Apple( 10, 20, "red", 200 );
// var apple2 = new Apple( 100, 200, "green", 50 );
// var apple3 = new Apple( 20, 200, "pink", 10 );
// //26 lec
// function Apple(color,weight){
//   this.color=color
//   this.weight=weight
// }
// Apple.prototype={
//   eat :function(){ return this; },
//   throws :function(){return "throw the Apple"}
// }
//  var apple1=new Apple("red",99)
//  var apple2=new Apple("green",300)
//  var apple3=new Apple("yellow",200)

// IF Statement

// var carsLeft = 1,
//   carsRight = 0,
//   greenMan = "yes";

// if (greenMan === "yes") {
//   console.log("cross the road");
// } else if (greenMan === "yes" && (carsLeft === 0 || carsRight === 0)) {
//   console.log("All clear! Cross the road");
// } else {
//   console.log("Stay where you are!");
// }

//    //lec 29 For & For in Loops
//  var classRegister = [ "Lawrence", "John", "Jeff" ];

// for( var i = 0; i < classRegister.length; i++ )
// {
//     console.log( classRegister[ i ] );
// }

// /*for( var i = classRegister.length - 1;   i >= 0;  i-- )
// {
//     console.log( classRegister[ i ] );
// }*/

// for( var index in classRegister )
// {
//     console.log( classRegister[ index ] );
// }

// var symbolName="value reference in memory"
// let letSymbol="scope value"
// const symName="constatnt value in memory"

// if(true){
//     var symbolName="value reference in memory"
// let letSymbol="scope value"
// const symName="constatnt value in memory"

// }

// function check(){
//     var varSymbol="assign a value"
// }

// lec 32 
// DOM
// Any method with element will return a single object.
// Any method with elements will return an array.

// console.log( document.getElementsByTagName('p') );

// console.log( document.getElementById('hello') );

// console.log( document.getElementsByClassName('pClass') );

// console.log( 
//     document.querySelectorAll( 
//         ' p[data-content="123"], body > h1.pClass > span '
//     ) 
// );

//lec 3 Changing Element Content's
// var pHello = document.getElementById('hello');
    
// pHello.innerText = "new world";

// pHello.innerHTML += " order <span>hello world</span>";

// pHello.outerHTML = '<h2 id="hello">new world order <span>hello world</span></h2>';

// var spanH1 = document.querySelectorAll('h1 span');

// spanH1[0].innerHTML = "new text here!!";

// console.log(document.getElementById('hello'))
// document.getElementById('hello').innerHTML="New World"

// //lec 34
// var el=document.getElementById('style')

// // el.style.background="blue"
// // el.style.color="white"
// // el.style.width="200px"

// // el.style.cssText="background :blue; color:white; width:100px "

// // el.style.cssText += "height :100px "

// //lec 35 Event Hamdler
//  var select=document.getElementsByName('cars')[0]
// select.onclick=function(event){
//     console.log(event)
// }
//  function ClickCallback(event)
// {
//     console.log('clicked by ad event listener')
// }
// select.addEventListener('click',ClickCallback)

// select.removeEventListener('click',ClickCallback)
// // )
// select.addEventListener('click',function(event)
// {
//     console.log('clicked by ad event listener')
// }
// )

// //36
// var element = document.createElement('div');

// element.style.cssText = "width:20px; height:20px; background:blue;";

// element.onclick = function(){ alert('hello'); };

// document.body.appendChild( element );

// var target = document.getElementById('yellow');

// document.body.insertBefore(element,target)
// // document.body.insertAfter( element, target );

//  lec 37 FDINAL PROJECT

let elements = document.getElementsByName('cssProperty');
let div = document.getElementById('modify');
function set()
{
    
    for( let index = 0; index < elements.length; index++ )
    {
        let cssProperty = elements[ index ].getAttribute('id');
        
        let cssValue = elements[ index ].value;
        
        
        div.style[ cssProperty ] = cssValue;
    }
}

document.getElementById('set').addEventListener('click',set);