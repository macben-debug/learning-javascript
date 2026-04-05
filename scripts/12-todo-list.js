 

const todoList =[
 
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  
   todoList.forEach((todoObject,index)=>{
    //const {todoObject} = todoList[i];
   // const name  = todoObject.name;
    //const dueDate = todoObject.dueDate;
   
    const {name, dueDate} =todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button class= "delete-todo-button" onclick = "
        todoList.splice(${index},1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML+= html;
  });
  //console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
 const inputElement= document.querySelector('.js-name-input');
 const name =inputElement.value;
 const dateInputElement= document.querySelector('.js-due-date-input');
 const dueDate =dateInputElement.value;
 //console.log(name);
 todoList.push(
  {
    //name: name,
   // dueDate: dueDate,
    name,
    dueDate
  }
  );
 inputElement.value= '';
 dateInputElement.value='';

 renderTodoList();
}
