const taskSchedular = []

const addTask = (title,description,dueDate,completed=false)=>{
    var newTask ={
       title:title,
       description:description,
       dueDate:dueDate,
       completed:completed
    }
   
      taskSchedular.push(newTask)
            // console.log('you pushed it')
}
addTask('read','new book','2026-04-10')
addTask('assigniment','working with others','2025-05-4')
// console.log(taskSchedular)

const sortingDate = ()=>{

    var result =taskSchedular.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log(result)


}
sortingDate()
// console.log(taskSchedular)


//updating task and mark as complete
const updatingTask =(title,description,dueDate,completed)=>{
   for (let i=0;i<taskSchedular.length;i++){
      if(taskSchedular[i].title === title){
        taskSchedular[i].dueDate =dueDate
        taskSchedular[i].description = description;
        taskSchedular[i].completed = completed;
        break;
      }
   }

}
updatingTask('read', 'old book', '2026-08-10', true);


//console.log(taskSchedular)

//allow user to remove the task from schedular

const removeTask = (title) => {
    for (let i = 0; i < taskSchedular.length; i++) {
        if (taskSchedular[i].title === title) {
            taskSchedular.splice(i, 1); 
            break
        }
    }
    // console.log("Task not found:", title);
};


 removeTask('read'); 
console.log(taskSchedular)
// console.log(removeTask('read'))