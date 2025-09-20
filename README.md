# Todo App

A simple and clean todo application built with React

## Live Demo
 https://dibenpee.github.io/todo_taskbs

## Features

- Add new tasks quickly with a simple input form
- Edit existing tasks by clicking the edit button
- Mark tasks as complete or incomplete with a checkbox
- Delete tasks you no longer need
- All tasks are automatically saved locally

## How to Run Locally

1. Make sure you have Node.js installed on your computer
2. Download or clone this project
3. Open your terminal and navigate to the project folder
4. Install the required packages:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm run dev
   ```
6. Open your browser and go to http://localhost:5173

## Technology Used

- React 19.1.0 for building the user interface
- Vite for fast development and building
- Tailwind CSS for styling
- React Icons for the buttons
- localStorage for saving your todos

## Project Structure

The app is organized into simple, easy-to-understand components:

- AddTodo: The form where you type new tasks
- TodoItem: Individual todo items with edit/delete buttons
- TodoList: Container that shows all your todos
- TodoContext: Manages all the todo data and functions

## Building for Production

To create a production-ready version:

```
npm run build
```

This creates a dist folder with all the files ready for deployment.
