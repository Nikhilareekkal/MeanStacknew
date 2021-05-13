function displayBox(num) {
    var inputBox=document.querySelector("#inpt")
    inputBox.value+=num;
    
}
function evaluateExpression(){
    var res=inpt.value
    let op=eval(res)
    inpt.value=op;


}
function clearBox(){
    inpt.value="";
}
function cancelElement() {
    let curval=inpt.value
    var res=curval.slice(0,-1)
    inpt.value=res;
    
}