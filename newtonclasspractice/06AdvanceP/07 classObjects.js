// import User from "./06classjs";

const User = require("./06classjs.js");

const ashvin = new User("ashvin", "manwar.ashvin@gmail.com");

console.log(ashvin.getInfo());
ashvin.enrollCourse("React Bootcamp");
ashvin.enrollCourse("Angular Bootcamp");

console.log(ashvin.getCourseList());

let courses = ashvin.getCourseList();

courses.forEach((c) => console.log(c));
