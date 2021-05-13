//create class
class Bank {
  //method for creating account

  createAccount(acno, bankname, minbal, ifsc_code) {
    this.acno = acno;
    this.bankname = bankname;
    this.bal = minbal;
    this.ifsc = ifsc_code;
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

var obj1=new Bank()
obj1.createAccount(4244335,"sbi",5000,"sbinoo123")
obj1.deposit(5000)  

