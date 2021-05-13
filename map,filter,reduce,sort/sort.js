//sort
var arr=[1,2,11,7,8,9]

arr.sort((num1,num2)=>num1-num2)
console.log(arr);

var employees=[
    {eid:2000,ename:"ajay",salary:25000,designation:"developers"},
    {eid:2001,ename:"sajay",salary:22000,designation:"qa"},
    {eid:2002,ename:"vijay",salary:23000,designation:"markt"},
    {eid:2003,ename:"ajith",salary:26000,designation:"developers"}

]
 var sortemp=employees.sort((emp1,emp2)=>emp1.salary-emp2.salary)
 console.log(sortemp);