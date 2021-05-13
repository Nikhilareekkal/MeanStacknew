class Calculation{
    add(){
        console.log( "no arg method");

    }
    add(num1){
        console.log( "single arg method");
    }
    add(num2){
        console.log( "two arg method");

    }
}
var calc=new Calculation()
calc.add(10,20)
calc.add(10)
calc.add()
//recently added method =>working