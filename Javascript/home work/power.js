var num=2;
var low=2,upp=30,i=1;
while( i <= 30 ){

    let res = i ** num;
    if(res >= low && res <= upp){
     console.log(i);
    }
    i++
}