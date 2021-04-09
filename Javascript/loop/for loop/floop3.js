var num=3;

var sum=0;
var res=0;
var i=1;
while (i<=num) {  
    res=res*10+num;       //1       3 1<=3 2<=3 3<=3
   sum=sum+res;     //3 33 333
    i++;   
}
console.log(sum);


