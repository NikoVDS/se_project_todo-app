import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import TodoCounter from "../components/TodoCounter.js";

import Section from "../components/Section.js";

import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();

  // // Apply id and for attributes.
  // // The id will initially be undefined for new todos.

  // // If a due date has been set, parsing this it with `new Date` will return a
  // // number. If so, we display a string version of the due date in the todo.

  return todoElement;
};

const section = new Section({
  items: [
    {
      id: "7cec7373-681b-49d9-b065-021d61a69d03",
      name: "Read the sprint's theory",
      completed: true,
      date: new Date(),
    },
    {
      id: "a7bfd5ef-37cc-4fa6-89f2-cac098a8aeba",
      name: "Read project instructions",
      completed: false,
      date: new Date(),
    },
    {
      id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
      name: "Complete project",
      completed: false,
      date: new Date(),
    },
  ],
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const popupWithForm = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const dateInput = inputValues.date;
    // Create a date object and adjust for timezone
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const id = uuidv4();
    const values = { name, date, id };
    const todo = generateTodo(values);
    section.addItem(todo);
    handleTotal(true);

    popupWithForm.close();
    newTodoValidator.resetValidation();
  },
});

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  handleTotal(false);
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

function handleTotal(increment) {
  todoCounter.updateTotal(increment);
}

popupWithForm.setEventListeners();

// The logic in this function should all be handled in the Todo class.

addTodoButton.addEventListener("click", () => {
  popupWithForm.open();
});

// addTodoCloseBtn.addEventListener("click", () => {
//   popupWithForm.close();
// });

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);

//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };
//   const todo = generateTodo(values);
//   section.addItem(todo);
//   popupWithForm.close();
//   newTodoValidator.resetValidation();
// });

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
