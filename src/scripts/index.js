import "@fortawesome/fontawesome-free/js/all";
import "bootstrap";
// Styles
import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

let importantAndUrgent;
let importantAndNotUrgent;
let notImportantAndUrgent;
let notImportantAndNotUrgent;

(function() {
  importantAndUrgent = document.getElementById("importantAndUrgent");
  importantAndNotUrgent = document.getElementById("importantAndNotUrgent");
  notImportantAndUrgent = document.getElementById("notImportantAndUrgent");
  notImportantAndNotUrgent = document.getElementById(
    "notImportantAndNotUrgent"
  );

  const quadrants = [
    importantAndUrgent,
    importantAndNotUrgent,
    notImportantAndUrgent,
    notImportantAndNotUrgent
  ];

  quadrants.forEach(quadrant => {
    const button = quadrant.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
      addNewTask(quadrant);
    });
  });

  quadrants.forEach(quadrant => {
    const ul = quadrant.getElementsByClassName("toDoList")[0];
    ul.addEventListener("click", () => {
      MoveTaskToDone(quadrant);
    });
  })();

  function MoveTaskToDone(quadrant) {
    const ulToDo = quadrant.getElementsByClassName("toDoList")[0];
    ulToDo.removeChild(ulToDo.childNodes[0]);

    const doneList = quadrant.getElementsByClassName("doneList")[0];
    const doneItem = getItem(quadrant);
    doneList.appendChild(doneItem);
  }

  function getItem(quadrant) {
    return quadrant.getElementsByTagName("li")[0];
  }

  function addNewTask(quadrant) {
    const value = getInputValue(quadrant);
    if (value) {
      addNewItem(value, quadrant);
    } else {
      alert("No task added");
    }
  }

  function getInputValue(quadrant) {
    const getValue = quadrant.getElementsByClassName("new-task")[0].value;
    return getValue;
  }

  function addNewItem(value, quadrant) {
    const list = quadrant.getElementsByClassName("toDoList")[0];
    const newTask = getLiWithText(value);
    list.appendChild(newTask);
  }

  function getLiWithText(value) {
    const newListItem = document.createElement("li");
    const checkbox = getCheckbox();
    const text = document.createTextNode(" " + value);
    const space = document.createTextNode(" ");
    const icon = getDeleteIcon();
    newListItem.appendChild(checkbox);
    newListItem.appendChild(text);
    newListItem.appendChild(space);
    newListItem.appendChild(icon);
    return newListItem;
  }

  function getCheckbox() {
    const input = document.createElement("input");
    input.type = "checkbox";
    return input;
  }

  function getDeleteIcon() {
    const i = document.createElement("i");
    i.className = "fas fa-trash";
    return i;
  }
});
