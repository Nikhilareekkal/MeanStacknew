var text="ababcc"
//find first recursive character A
var res={}
for (let ch of text){
    //A
    
    if(ch in res){
        console.log(ch +"is the first recursive character");
        break;
    }
    else{
        res[ch]=1;
    }

}