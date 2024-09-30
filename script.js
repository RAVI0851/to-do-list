const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("todoList");
const fi =[];

submit.addEventListener("click",function(){
    const task = input.value;
    if(task!==""){
        addTask(task);
        savetasks();
    }
    });
        function addTask(task){
            const li = document.createElement('li');
            li.textContent = task;
            list.appendChild(li);
        input.value="";
        const complete = document.createElement('button');
        complete.textContent = "  Complete";
        li.appendChild(complete);
        complete.addEventListener('click',function(){
            li.style.textDecoration = "line-through";
            savetasks();
        });
        const deletebtn = document.createElement('button');
        deletebtn.textContent= "Delete";
        li.append(deletebtn);
        deletebtn.addEventListener('click',function(){
            li.remove();
            savetasks();
        });
    }
function savetasks(){
    const tasks = [];
    const items = todoList.getElementsByTagName('li');
    for(let x of items){
        tasks.push(x.firstChild.textContent);
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks){
        for(let task of tasks) {
            addTask(task);
        }
    }

}
loadTasks();