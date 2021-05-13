//map
var arr=[1,2,11,7,8,9]
//find square of this numbers
var square=arr.map(num=>num**2)
console.log(square );



var employees=[
    {eid:2000,ename:"ajay",salary:25000},
    {eid:2001,ename:"sajay",salary:22000},
    {eid:2002,ename:"vijay",salary:23000},
    {eid:2003,ename:"ajith",salary:26000}

]
//ename only
var enames=employees.map(emp=>emp["enames"].toUpperCase())
console.log(enames);

var esal=employees.map(emp=>emp["salary"])
console.log(esal);