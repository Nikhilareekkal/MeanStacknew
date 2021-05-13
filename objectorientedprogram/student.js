class Student {
  setStudent(roll, name, course, total) {
    this.roll = roll;
    this.name = name;
    this.course = course;
    this.total = total;
  }
  printStudent(){
      console.log("roll"+this.roll);
      console.log("name"+this.name);
      console.log("corse"+this.course);
      console.log("total"+this.total);
  }
}
//objects
//reference=new classname()
var obj1=new Student();
obj1.setStudent(100,"nikhil","bca",150);
obj1.printStudent()
