// Hitesh Choudhary
// console.log(" Hello Ashvin"); 
// const uid="abc123";

// var fullName="Ashvin Manwar";
// var email="manwar.ashvin@gmail.com";
// var password="12345678";
// var confirmPassword="12345678";
// var courseCount=0;
// var isLoggedInFromGoogle=false;

// console.log(uid);
// console.log("full Name is : ",fullName);
// console.log(email);

// console.log(`
//     with Unique ID :${uid}
//     User is:${fullName}
//     and his email is:${email}
//     and uses the password:${password}
// // `);

// // D=(L-S)/L*100
// var sellingPrice=199;
// var listingPrice=799;
// var discountPercent=((listingPrice-sellingPrice)/listingPrice)*100;
// console.log("Discount Percentage is:"+discountPercent)
// displayDiscountPersent=Math.round(discountPercent)
// console.log(displayDiscountPersent);
// var result=listingPrice>sellingPrice ;
// console.log(typeof result);

// //9
// var temperature;
// temperature=20
// // var result=temperature<20;
// // console.log(result)

// if(temperature<20){
//     console.log("its very cold outside")
// }
// if(temperature<30){
//     console.log("its very moderator outside")
// }else{
//     console.log("its very hot outside");
// // }
// var email=true;
// var facebook=false;
// var google=false;

// if(email || facebook || google){
//  console.log("Login Success");
// }

//11
// var authenticated= true;

// if(authenticated){
//     console.log("Show singout button")
// }else{
//     console.log("show logging option");
// }

// authenticated ? console.log("Show singout button") :console.log("Show Login button")

// var user="testprep";
// switch( user){
//  case "admin":
//        console.log("you get full access");
//        break;
//  case "subadmin":
//        console.log("Get access to create/ delete course");
//        break;
//  case "testprep":
//        console.log("Get access to create/ delete tests");
//        break;
//  case "user":
//        console.log("Get access to create/ delete courses");
//        break;
//  default:
//     console.log("Trial user");
//     break;
// }

// function sayHello(name){
//     console.log("Hello there ,Ashvin");
//     console.log("Hello there , ",name);
// }
// sayHello("Ashvin");
// sayHello("ADITYA");
// function namstey(){
//     return "Hellow in india";
// }
// var greetings=namstey();
// console.log(greetings);
// 15
// function getUserRole(name,role){
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all access`;
//             break;
//         case "subdmin":
//             return `${name} is sub-admin with access to create and  delete course`;
//             break;
//         case "testprep":
//             return `${name} is a test prep  with access to create and  delete tests`;
//             break;
//         case "user":
//             return `${name} is a user to consume content`;
//             break; 
//         default:
//             return `${name} is a trial user`;
//             break;
//     }
// }
// console.log(getUserRole("Ashvin","testprep"));

// var getRole=getUserRole("Aditya","user");
// console.log(getRole);
//16
// tipper("80")

//  function tipper(a){
//     var bill =parseInt(a)
//     console.log(bill+5);
//  }
//   var bigTipper=function(a){
//     var bill =parseInt(a)
//     console.log(bill+15);
//  }
//  bigTipper("200");

// var name="Ashvin"
// console.log(name);
//  function sayName(){
//     var name="Mr.H"
//     console.log(name);
//  }
//  sayName(); 
//  console.log(name);

// sayHello();
// function sayHello(){
//    console.log("hello");
// }

// if(2==='2'){
//    console.log(" this is true");
// }
// var myName="Ashvin"
// if(myName===windows.myName){
//    console.log('This is a true statement')}
//  var num=2;
//   function sayME(){
//    console.log("Say me");
//   }
//   sayME();

// var name="Ashvin"
// console.log("Line 1",name);
// function sayName(){
//    var name="  Mr . Ashvin"
//    console.log("next line",name);

//    sayNameTwo();

//  function sayNameTwo(){
//    console.log("3rd  line",name);
// }
// }
// sayName();
// console.log(this);

// var game="basketball";
//  function sayName(){
//    var name="Ashvin";
//    console.log(this);
//  }
// sayName();
//20Arrays
//  var counytries=["India","USA","JAPAN","RUSSIA"]
//  var states=new Array("Rajasthan","DELHI","Mumbai","ASSAM");

//  console.log(states[0]);
// console.log(states.length);
// states[0]="Punjab"
// console.log(states);

// var user=["ashvin","manwar.ashvin@gmail.com",2,34,true];
// console.log(user);

// user.pop();//ending element
// user.pop();
// // console.log(user);
// user.unshift(" new value");
// // console.log(user);
// user.shift();
// console.log(user);
// console.log(user.indexOf(2));

// console.log(Array.from("Ashvin"));

//21 Callback and arrow functio

// var isEven=(element) =>{
// // if (element%2===0) {
// //    return true;
// // } 
// // return false;

// return element %2===0
// }
// // console.log(isEven(3));
// // var result=[2,4,6,8].every(isEven)
// var result=[2,4,6,8].every((e) =>{
//    return e%2 ===0
// })
// // var result=[2,4,6,8].every((e)=> (e%2===0))
// console.log(result);

//22
//  var testArray=[2,4,6,3,1,5,9,8]
//  console.log(testArray.fill("H"));//(8) ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H']
//  console.log(testArray.fill("H",2));// [2, 4, 'H', 'H', 'H', 'H', 'H', 'H']
 
// console.log(testArray.fill("empty"));

// const myNumber=[23,24,25,55,66,77,87,98]
//  const result=myNumber.filter((num) =>num !=55);

//  console.log(result);//[23, 24, 25, 66, 77, 87, 98]
// var users=["Ashvin","rohit","tom","Sam","Sor"]
// console.log(users.slice(1,3));
// users.splice(1,2,"HI")
// console.log(users);

// 24 objects
// var user={
//    firstName:"Ashvin",
//    lastName:"Manwar",
//    role:"Admin",
//    loginCount:32,
//    facebookSignedIn:true
// };
// console.log(user.firstName);
// console.log(user["lastName"]);
// console.log(user.loginCount);
// user.loginCount=44;
// console.log(user.loginCount);
// console.table(user)

//25 Method and Objects
// var user={
//       firstName:"Ashvin",
//       lastName:"Manwar",
//        role:"Admin",
//       loginCount:32,
//       facebookSignedIn:true,
//       courseList:[],
//       buyCourse :function(courseName){
//          this.courseList.push(courseName);
//       },
//       getCourseCount:function(){
//          return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
//       },
// };
// var courseList=true;
// console.log(user.firstName);
// console.log(user.getCourseCount());
// user.buyCourse("React JS course");
// user.buyCourse("Angular JS course");
// console.log(user.getCourseCount());
//26
// for (let i = 0; i <=10; i++) {
//    console.log(i);   
// }
// const myState=["maha","delhi","Assam","Kerala",1998,"karnataka"];
// for (let i = 0; i < myState.length; i++) {
//    if (typeof myState[i] =="string") {
//       continue;
//    }
//    console.log(myState[i]);  
// }

// let i=0;
// while (i<myState.length) {
   // console.log(myState[i]);
   // i++;
// }
// for(;;){
// if (i>3) {
//    break;
// }
// console.log(i);
// i++;
// }

// myState.forEach((s)=>(console.log(s)))
// for (const n of myState) {
   // console.log(n);}

   //31
   // console.log(this);
   
   // var user={
   //    firstName :"Ashvin",
   //    courseCount:4,
   //    getCourseCount:function () {
   //       console.log("LINE no 309",this);
   //       function sayHello() {
   //          console.log("HEllo");
   //          console.log("LINE 312",this);
            
   //       }
   //       sayHello();
   //    },
   // }
   // user.getCourseCount();