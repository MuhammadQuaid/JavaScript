function addTodoList() {
    const inputValue = document.getElementById("todoInput");
    const textValue = inputValue.value;
    const todoText = document.getElementById("todoData");
    const errorMsg = document.getElementById("errorMsg");
  
    if (textValue === "") {
      errorMsg.textContent = "please add todo";
      return;
    }
  
    errorMsg.textContent = "";
    //   li create
    const li = document.createElement("li");
    li.textContent = textValue;
    todoText.append(li);
    //   console.log(li);
  
    const dltBtn = document.createElement("button");
    dltBtn.textContent = "delete";
    console.log(dltBtn);
    dltBtn.className = "delete_btn";
    dltBtn.onclick = function () {
      console.log("delete");
      todoText.removeChild(li);
    };
  
    li.appendChild(dltBtn);
  }