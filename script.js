// Selectors

const todoinput=document.querySelector('.input-todo');
const todobutton=document.querySelector('.button-todo');
const todolist=document.querySelector('.list-todo');


// event listner

todobutton.addEventListener('click',Add_Todo);
todolist.addEventListener('click',deleteCheck);


// Functions
function Add_Todo(event)
{
    // event.preventDefault();
    // tododiv
    const todo_Div=document.createElement("div");
    todo_Div.classList.add("create-todo");
    // create li
    const new_Todo=document.createElement('li');
    new_Todo.innerText=todoinput.value;
    // console.log(new_Todo);
    new_Todo.classList.add("todo-item");
    todo_Div.appendChild(new_Todo);

    // check mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='Completed'
    completedButton.classList.add("complete-btn");
    todo_Div.appendChild(completedButton);

    // check trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='Delete'
    trashButton .classList.add("trash-btn");
    todo_Div.appendChild(trashButton);
    todolist.appendChild(todo_Div);
    todoinput.value="";

}

function deleteCheck(e){
    // console.log(e.target);
    const item=e.target;
    // Delete todo
    if(item.classList[0]=='trash-btn')
    {
        const todo=item.parentElement;
        todo.remove();
    }
    // check mark
    if(item.classList[0]=='complete-btn')
    {
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}