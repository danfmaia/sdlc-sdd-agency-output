# Simple Todo List React App

## Overview
This project is a simple todo list application built using React. It allows users to manage their tasks by adding, viewing, and removing them from the list.

## Features
- **Add Task**: Users can add new tasks to their todo list.
- **View Tasks**: Users can view all tasks they have added.
- **Remove Task**: Users can remove tasks from their list.

## Technical Requirements
- The application is built using React.
- It is designed to be responsive and user-friendly.
- The development follows Test-Driven Development (TDD) principles.

## Testing
- Unit tests are written for each feature before implementation.
- All tests must pass before a feature is considered complete.

## Documentation
- The code is documented to facilitate future maintenance and collaboration.

## Completion Criteria
- All features are implemented and tested.
- The code is well-documented.
- All tests pass successfully.

## Code Structure
- **TodoApp Component**: Manages the state and rendering of the todo list.
  - **State Variables**:
    - `tasks`: Stores the list of tasks.
    - `newTask`: Stores the current input value for a new task.
  - **Functions**:
    - `handleAddTask`: Adds a new task to the list.
    - `handleRemoveTask`: Removes a task from the list.
  - **Render**:
    - Input field for new tasks.
    - 'Add' button to add tasks.
    - List of tasks with 'Remove' buttons.

## Responsiveness
The app is designed to be responsive, ensuring a user-friendly experience across different devices.

## Getting Started

To get the TODO app up and running on your local machine, follow these steps:

1. **Install Dependencies**: Ensure you have Node.js and npm installed. Navigate to the project directory in your terminal and run:
   ```bash
   npm install
   ```

2. **Start the Development Server**: After installing the dependencies, start the development server with:
   ```bash
   npm start
   ```

   This will launch the React development server, and you can view the app in your browser at `http://localhost:3000`.

## Conclusion
The Simple Todo List React App is a basic application that demonstrates the use of React for managing state and rendering components. It adheres to TDD principles, ensuring thorough testing of all features before implementation.