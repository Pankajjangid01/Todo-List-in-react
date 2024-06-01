# To-Do List Application

This is a simple To-Do List application built with React and styled using Tailwind CSS. The application allows users to add, remove, and mark tasks as completed or incomplete. It also includes filtering options and toast notifications for various actions.

## Features

- Add tasks with a status (completed/incomplete)
- Remove tasks
- Mark tasks as completed or incomplete
- Filter tasks by status (all, completed, incomplete) using radio buttons
- Persist tasks in localStorage
- Toast notifications for task actions

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
2. Installation Dependecies:
   -npm install
3. Start the application:
   -npm start

##Testing Guidance

**Adding a Task**
1. Type a task in the input field.
2. Select "Incomplete" or "Completed" from the dropdown.
3. Click "Add Task".
4. A toast notification should appear confirming the task has been added.
5. The task should appear in the list below.
   
**Marking a Task as Completed/Incomplete**
1. Click on a task in the list.
2. The task should toggle its completion status (indicated by a line-through style if completed).
3. A toast notification should appear indicating the change in status.

**Removing a Task**
1. Click the "Remove" button next to a task.
2. The task should be removed from the list.
3. A toast notification should appear indicating the task has been removed.

**Filtering Tasks**
1. Use the radio buttons to filter tasks by "All", "Completed", or "Incomplete".
2. The task list should update to show tasks according to the selected filter.

**LocalStorage Integration**
1. Refresh the page.
2. The tasks should persist, reflecting their previous state.

##License
This project is licensed under the MIT License. See the LICENSE file for details.

##Acknowledgements
React
Tailwind CSS
React Toastify
