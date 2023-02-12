// function init() {
//   var firstName = "Ashvin";
//   function sayFirstName() {
//     console.log(firstName);
//   }
//   sayFirstName();
// }

// init();

function init() {
  var firstName = "Ashvin";
 console.log("Im init");
  function sayFirstName() {
    console.log(firstName);
  }
 return sayFirstName();
}

var value=init();
value;