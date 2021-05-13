var employee = {
    eid: 1000,
    name: "ravi",
    post: "developer",
    experience: 2,
    salary: 22000
}




//console.log(employees);
console.log(employee["name"]);
console.log(employee["salary"]);


//checking for gender key
console.log("gender" in employee);
//adding new key value pair
employee["gender"] = "male"
console.log(employee);

//i want to add salary to 2000
employee["salary"] += 2000
console.log(employee);
