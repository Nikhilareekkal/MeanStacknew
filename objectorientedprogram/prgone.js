class Employee{
    setEmp(eid,ename,designation,salary){
        //initializing student objects eid,ename,designation,salary
        this.eid=eid
        this.ename=ename
        this.designation=designation
        this.salary=salary
    }
    printEmp(){
        //printing student objects
        console.log("eid"+this.eid);
        console.log("ename"+this.ename);
    }
}
var ob1=new Employee();
ob1.setEmp(1000,"nikhil","SE",30000)
ob1.printEmp()