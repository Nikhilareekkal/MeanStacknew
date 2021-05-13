//create an objet name as student with rol=100,name=vinu,course=bca,total=15
var student={rol:100,
    name:"vinu",
    course:"Bca",
    total:150
}
//print all student name only
console.log(student["name"]);

//check for grade key is exist or not
console.log("grade"  in student);

//add new key value pair grade=bplus
student["grade"]="bplus"
//update  mark with current mark+50
student["total"]+=50
console.log(student);


for (let key in student)
{
    console.log(key);//roll name
    console.log(student[key]);//stdent[rol],student[name]
}