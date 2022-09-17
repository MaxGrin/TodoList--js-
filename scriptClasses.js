//Классы
class Task{
    constructor(text){
     this.text = text;
     this.isDone = false;
    }
 }
 
 let dataService = {
   tasks : [],
   get allTasks(){
     return this.tasks
   },
   get notCompletedTasks(){
     return this.tasks.filter(task => task.isDone == false)
   },
   add(task){
     this.tasks.push(task)
     this.save()
   },
   save(){
     localStorage.setItem('tasks', JSON.stringify(this.tasks))
   },
   open(){
     this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
   }
 }
 
 class TaskListView {
    element;
 
    constructor(element){
     this.element = element;
    }
    #drawList(tasksElement)
 }
 
 class TaskView {
 
 }