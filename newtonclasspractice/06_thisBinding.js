const ashvin = {
    firstName: "Ashvin",
    lastName: "Manwar",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
      console.log(`
          First name is ${this.firstName}
          Last name is ${this.lastName}
          His role is ${this.role}
          and he is studying ${this.courseCount} courses
          `);
    },
  };
  
  const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
  };
  
 
  
  
//   ashvin.getInfo();
//   dj.getInfo();// give error

//  var djInfo= ashvin.getInfo.bind(dj);
//  djInfo();

ashvin.getInfo.call(dj);