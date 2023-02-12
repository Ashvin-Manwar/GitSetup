var User =function(firstName,courseCount){
    this.firstName=this.firstName;
    this.courseCount=this.courseCount;
    this.getCourseCount=function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}

User.prototype.getFirstName=function(){
 console.log(`Your firstname is:${this.firstName}`);
}

var ashvin=new User("ashvin",2)
// console.log(ashvin);
ashvin.getCourseCount();
ashvin.getFirstName();
var sam=new User("sam",1)
// console.log(sam);
sam.getCourseCount();
sam.getFirstName();