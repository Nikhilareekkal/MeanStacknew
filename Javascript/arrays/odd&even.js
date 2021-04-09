arr=[10,11,12,13,14,15]
even=[]
odd=[]
for(var num of arr)
{
    if(num%2==0){
    even.push(num);
    }
    else{
        odd.push(num)
    }
}
console.log(odd);
console.log(even);