const tasks = document.querySelector('.tasks');
const submit = document.querySelector('.submit');
const taskInput = document.querySelector('.taskInput');
let NoOfTasks = 0;

submit.addEventListener('click',
    ()=>{

        if(taskInput.value!=''){
            task = document.createElement('div');
            task.id = `task${++NoOfTasks}`;
            task.innerHTML = taskInput.value;
            task.className = `task`;
            tasks.appendChild(task);
            console.log(task);
            // taskInput.value='';
        }
    }
)