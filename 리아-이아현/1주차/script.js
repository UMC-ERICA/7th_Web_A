const taskInput = document.getElementById("task");
const toDoList = document.getElementById("toDoList");
const doneList = document.getElementById("doneList");

// 할 일 추가 함수
function addTask() {
  const taskValue = taskInput.value;
  if (taskValue === "") {
    alert("해야할 일을 작성해 주세요!");
    return;
  }

  const taskItem = document.createElement("div");
  const taskText = document.createElement("span");
  taskItem.classList.add("task-item");
  taskText.textContent = taskValue;

  const completeButton = document.createElement("button");
  completeButton.textContent = "완료";
  completeButton.classList.add("complete-btn");

  completeButton.addEventListener("click", function () {
    moveToDone(taskItem, taskValue);
  });

  taskItem.appendChild(taskText);
  taskItem.appendChild(completeButton);
  toDoList.appendChild(taskItem);
  taskInput.value = "";
}

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// 해낸 일로 이동시키는 함수
function moveToDone(taskItem, taskValue) {
  const doneItem = document.createElement("div");
  const doneText = document.createElement("span");
  doneItem.classList.add("done-item");
  doneText.textContent = taskValue;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.classList.add("delete-btn");

  deleteButton.addEventListener("click", function () {
    doneItem.remove();
  });

  doneItem.appendChild(doneText);
  doneItem.appendChild(deleteButton);
  doneList.appendChild(doneItem);
  taskItem.remove();
}
