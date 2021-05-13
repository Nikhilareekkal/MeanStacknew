class Parent{
    m1(){
        console.log("inside parent");
    }
}
class Child1 extends Parent{
    m2(){
        console.log("inside child1");
    }
}
class Child2 extends Child1{
    m3(){
        console.log("inside childe");
    }
}
var ch=new Child2()
ch.m3();
ch.m2();
ch.m1();