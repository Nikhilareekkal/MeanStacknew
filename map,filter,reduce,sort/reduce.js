// to get a single value
//2 parameters nessessory
var arr=[1,2,11,7,8,9]
//highest
//1,2=>2,2,11=>1,11,7=>11,8,11=>11,9,11=>11
//sum
//1,2=>3,11=>14,7=>21,8=>29,9=>39
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

var min=arr.reduce((num1,num2)=>{
    if(num1<num2){
    return num1
    }
    else{
        return num2
    }
})
console.log(min);
//shortform
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

var employees=[
    {eid:2000,ename:"ajay",salary:25000,designation:"developers"},
    {eid:2001,ename:"sajay",salary:22000,designation:"qa"},
    {eid:2002,ename:"vijay",salary:23000,designation:"markt"},
    {eid:2003,ename:"ajith",salary:26000,designation:"developers"}

]
//highest salary
var emp=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(emp);
console.log(emp["ename"]+","+emp["salary"]);
 