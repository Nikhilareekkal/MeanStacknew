function createToDo(){
    let no=num.value;
    let username=uname.value;
    let tsk=task.value;
    let status=sts.value;

    let todo={
        slno:no,
        user_name:username, 
        task:tsk,
        status:status
    }
localStorage.setItem(no,JSON.stringify(todo))
}

function displayToDo(){

    let html_data=``;

    //fetch all todos from localstorage
    let len=localStorage.length;
    for(i=0;i<len;i++){
        let todo=JSON.parse(localStorage.getItem(localStorage.key(i)))
        console.log(todo);
       html_data+=` <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${todo.task} </h5>
    <h6 class="card-subtitle mb-2 text-muted">${todo.status}</h6>

    <p class="card-text">${todo.user_name}</p>
  </div>
</div>`
    }
    document.querySelector("#resultarea").innerHTML=html_data
}