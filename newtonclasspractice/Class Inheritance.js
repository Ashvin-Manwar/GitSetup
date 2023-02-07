var Shape = require('./shape.js');

class Circle extends Shape {
     constructor(color) {
          super();
     }
     calculateArea() {
     }
}
// export class using module.exports
module.exports = Circle;
// declare class
class Shape {
     constructor() {
          this.color = "green";
     }
     drawShape() {
     }
     calculateArea() {
     }
}
// export class using module.exports
module.exports = Shape;