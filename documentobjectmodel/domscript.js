var clk=document.querySelector("#clk")

clk.addEventListener("click",()=>{
clk.innerHTML="clicked";
clk.style.color="green";
})

var dbclk=document.querySelector("#dbclk")
dbclk.addEventListener("dblclick",()=>{
    dbclk.innerHTML="double clicked";
    dbclk.style.color="red";

})
var ove=document.querySelector("#ove")
ove.addEventListener("mouseover",()=>{
    ove.innerHTML="mouse currently over me";
    ove.style.color="blue";
   
})
ove.addEventListener("mouseout",()=>{
    ove.innerHTML="mouseover";
    ove.style.color="black"
})