        let taskNameInput = document.querySelector('#task-name-input')
        let addTaskBtn = document.querySelector('#add-task-btn')
        let taskList = document.querySelector('.task-list')
        let startMessage = document.querySelector('#start-message')

        addTaskBtn.addEventListener('click', addTaskHandler)

        taskNameInput.addEventListener('keydown', function(event){
            if(event.code =='Enter') addTaskHandler()
            console.log(event);
        })


        function createTask(text) { 
            let div = document.createElement("div")
            div.classList.add('task') 
            let input = document.createElement("input")

            input.addEventListener('click', changeTaskState)

            input.type = 'checkbox' 

            let p = document.createElement("p")
            p.innerText = text 

              
            let deleteTask = document.createElement('button')
            deleteTask.textContent = 'Delete task';
            deleteTask.classList.add('task-delete')
            deleteTask.addEventListener('click', deleteTaskHandler)


            div.append(input)
            div.append(p)
            div.append(deleteTask)

            return div
        }

        function deleteTaskHandler() {
            if(confirm('Are you sure you wand delete this task?')){
            this.parentElement.remove()
            }
            startMessage.hidden = false;
        }

        function changeTaskState() {
            if(this.checked){ 
                this.parentElement.classList.add('completed')
            } else {
                this.parentElement.classList.remove('completed') 
            }
        }
        
        function addTaskHandler() {
            if(taskNameInput.value){ 
               if(!startMessage.hidden) 
               startMessage.hidden = true 

               let newTask = createTask(taskNameInput.value)
               taskList.append(newTask)
               taskNameInput.value = ''
            } else {
                alert('add new task')
            }    
        }