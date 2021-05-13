var users={
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:50000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:50000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:50000}
}
//balance of user with acountnumber 1000
//console.log(users[1000]["balance"]);

var acno=1009;
var username="userone";
var password="userone";

function login(acno,username,password) {

    if(acno in users){
        let uname=users[acno]["username"]
        let pwd=users[acno]["password"]
        if(username==uname & password==pwd){
            console.log("login successfully");
        }
        else{
            console.log("incorrect username or password");
        }
    }
    else{
        console.log("invalid user");
    }
    
}
login(acno,username,password)

