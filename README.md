# Simple Todo App

The App allows you to add items to a checklist and check these items off whenever a task is finished.

## Functionality

The user can add a description of the task as well as the due date the task has to be finished by and submit the form, a new item is then added to the list every time the user clicks "Create".

## Technology

HTML and CSS were used in the project development, JavaScript was also used with different modules for handling different parts of the code. The index.js is importing the files handling specific parts of the code functionality and putting them all together. Todo.js is handling the new list item creation and deletion as well as the date creation and formatting, it is also appending the list items to the page. The FormValidator.js file is handling user form validation, if the input is invalid then the submit button is disabled and a message is also returned to the user telling them what needs to be corrected. constants.js contains the configuration objects as well as the initial to do items that are rendered when the page loads, i.e. the static elements of the page.

## Deployment

This project is deployed on GitHub Pages:

[To Do Project](https://nikovds.github.io/se_project_todo-app/)
