//create class
class Bank {
    //method for creating account
  
    constructor(acno, minbal,actype) {
      this.acno = acno;
      this.bankname = bankname;
      this.bal = minbal;
      this.ifsc = ifsc_code;
      this.actype=actype;
    }
    deposit(amount) {
      this.bal += amount;
      console.log(
        "your" +
          this.bankname +
          "account" +
          this.acno +
          "has been credited with" +
          amount +
          "available bal:" +
          this.bal
      );
    }
    withdraw(amount) {
      if (amount < this.bal) {
        this.bal -= amount;
        console.log(
          "your" +
            this.bname +
            "account" +
            this.acno +
            "has been debited with" +
            amount +
            "available bal:" +
            this.bal
        );
      } else {
        console.log("transaction has been cancelled with error code1001");
      }
    }
    balenq(){
        console.log("your available balance is:"+this.bal);
    }
  }
  
  var obj1=new Bank(1000,5000,"savings")
  var obj2=new Bank(1001,5000,"savings")
  var obj3=new Bank(1002,5000,"current")
  var obj4=new Bank(1003,5000,"savings")
 
  //account details of saving account
  var users=[]
  users.push(obj1)
  users.push(obj2)
  users.push(obj3)
  users.push(obj4)

  var savinguser=users.filter(user=>user.actype=="savings")
  console.log(savinguser);

  //sort users according with their balance
  var srtdusers=users.sort((user1,user2)=>user1.bal-user2.bal)
  
  //print user who have high bal
  var highbal=users.reduce((user1,user2)=>user1.bal>user2.bal?user1:user2)
  console.log(highbal);