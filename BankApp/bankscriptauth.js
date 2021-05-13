 
 class bank{

    getAccountDetails(){
        var users={
            1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
            1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:50000},
            1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:50000},
            1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:50000}
        }
        return users
    }
    //authenticate(1000,username,username) return 1=> success !return 0=>incorrect username or password  -1=>invalid user
    authenticate(acno,username,password){
        let users=this.getAccountDetails()
        if(acno in users){
         if(username==users[acno]["username"]&password==users[acno]["password"]){
             return 1;
         }
         else{
             return 0;
         }
        }
        else{
            return -1;
        }
    }
    login(){

    }

    deposit(){

    }

    withdrwal(){

    }
     
    checkbalance(){

    }
 }
 var bnk=new bank()
 let user=bnk.authenticate(1005,"userone","userone")
 if(user==1){
     console.log("login successfully");
 }
 else if(user==0){
console.log("invalid username or password");
 }
 else if(user==-1){
     console.log("invalid Account");
 }