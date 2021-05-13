class Employee{
    constructor(eid,ename,designation,salary){
        //initializing student objects eid,ename,designation,salary
        this.eid=eid;
        this.ename=ename;
        this.designation=designation;
        this.salary=salary;
    }
     printEmployee(){
      // printing student objects
        console.log("eid  "+this.eid);
        console.log("ename  "+this.ename);
    }
}
var obj1=new Employee(1000,"nikhil","SE",30000);
console.log(obj1.ename);
