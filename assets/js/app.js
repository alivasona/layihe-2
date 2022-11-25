const addInput = document.querySelector('#inputValue')
const sortBtn = document.querySelector('.filter_icon')
const addBtn = document.querySelector('#add_btn')
const delTaskBtn = document.querySelector('#close_icon')
const todoList = document.querySelector('.todo_list')


delTaskBtn.addEventListener('click', () => {
   addInput.value = ''
})


addBtn.addEventListener('click', (e) => {
   let todo = addInput.value
   todo = todo.trim()
   if (todo == '') {
      alert('İnput boşdur!')
   } else {
      console.log(todo)
      addTodo(todo);
      addInput.value = ''
      deteleTodo()
   }
})


function addTodo(todo) {
   if (Array.isArray(todo)) {
      todoList.innerHTML = '';
      todo.map(element => {
         todoList.innerHTML += `
                <li class="todo_list_item">
                    <span class="todo_list_item_text" id="todo_list_item_text">
                        ${element.innerText}
                    </span>
                    <img class="todo_list_item_delete deleteListItem" src="assets/images/Group 77.svg" alt="delete icon">
                </li>`;
      })
   }
   else {
      let todoListItem = ` 
        <li class="todo_list_item">
            <span class="todo_list_item_text" id="todo_list_item_text">
                ${todo}
            </span>
            <img class="todo_list_item_delete deleteListItem" src="assets/images/Group 77.svg" alt="delete icon">
        </li>
        `
      todoList.innerHTML += todoListItem
   }
}


function deteleTodo() {
   let todoListItem = document.querySelectorAll('.todo_list_item')
   todoListItem.forEach((li) => {
      console.log(li)
      li.addEventListener('click', e => {
         console.log(e.target);
         if (e.target.classList.contains('deleteListItem')) {
            li.remove()
         } else {
            alert("Silmek duymesine basin!")
         }
      })

   })
}


sortBtn.addEventListener('click', () => {
   let listItemText = [...document.getElementsByClassName('todo_list_item_text')];
   console.log(listItemText);
   let sorted = doSort(listItemText);
   addTodo(sorted);
   deteleTodo()
})


const doSort = (todoList) => {
   return todoList.sort((a, b) => {
      if (a.outerText > b.outerText) {
         return 1
      }
      if (a.outerText < b.outerText) {
         return -1
      }
      return 0
   })
}