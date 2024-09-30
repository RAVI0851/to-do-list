const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("todoList");

submit.addEventListener("click",function(){
    const task = input.value;
    if(task!==""){
        addTask(task);
        savetasks();
    }
    });
        function addTask(task){
            const li = document.createElement('li');
            li.className = 'flex items-center justify-evenly bg-gray-100 p-2 rounded shadow'
            const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.className = 'bg-gray-100';
        li.appendChild(taskText);
        // input.value="";
        const complete = document.createElement('button');
        complete.className = 'bg-green-500 text-white px-2 py-1 rounded mr-2 shadow'
        complete.textContent = "Complete";
        li.appendChild(complete);
        complete.addEventListener('click',function(){
            taskText.style.textDecoration = "line-through";
            savetasks();
        });
        const deletebtn = document.createElement('button');
        deletebtn.textContent= "Delete  ";
        deletebtn.className = 'flex items-center space-between bg-red-500 text-white px-2 py-1 rounded mr-2'
        li.append(deletebtn);
        deletebtn.addEventListener('click',function(){
            li.remove();
            savetasks();
        });
        list.appendChild(li);
        input.value ="";
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