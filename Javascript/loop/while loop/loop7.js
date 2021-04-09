 //rev of a number
 var num=512;

var res=0;

while(num!=0){

    let digit=num%10
    
    
    res=res*10+digit

    num=Math.floor(num/10)
}
console.log(res);