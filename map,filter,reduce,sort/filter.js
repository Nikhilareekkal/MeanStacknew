//have confition
var arr=[1,2,11,7,8.9]
var evens=arr.filter(num>=num%2==0)
console.log(evens);



var employees=[
    {eid:2000,ename:"ajay",salary:25000,designation:"developers"},
    {eid:2001,ename:"sajay",salary:22000,designation:"qa"},
    {eid:2002,ename:"vijay",salary:23000,designation:"markt"},
    {eid:2003,ename:"ajith",salary:26000,designation:"developers"}

]
//find salary>25000
var emps=employees.filter(emp>=emp.salary>25000)
console.log(emps);

var developers=employees.filter(emp=>designation="developers")
console.log(developers);
var developersname=employees.filter(emp=>emp.designation=="developer").map(obj=>obj.ename)
