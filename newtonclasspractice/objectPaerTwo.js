var User = {
    name: "",
    getUserName: function () {
      console.log(`User name is : ${this.name}`);
    },
  };
  
  var ashvin = Object.create(User);
  console.log(ashvin);
  ashvin.name = "Ashvin Manwar";
  ashvin.getUserName();
  
  var sam = Object.create(User, {
    name: { value: "sammy" },
    courseCount: { value: 3 },
  });
  
  sam.getUserName();
  