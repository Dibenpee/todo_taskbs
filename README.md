# Todo App - BuilderSoft Task

A simple and elegant todo application built with React and Vite.

## ✨ Features

- ✅ Add new todos
- ✏️ Edit existing todos
- ❌ Delete todos
- 🔄 Toggle completion status
- 💾 Local storage persistence
- 🎨 Beautiful yellow color theme
- 📱 Responsive design

## 🛠️ Built With

- **React 19.1.0** - UI framework
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **React Icons** - Icon library
- **Context API** - State management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dibenpee/todo_taskbs.git
cd todo_taskbs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

## 🌐 Deployment

The app can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── AddTodo.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── context/
│   └── TodoContext.jsx
├── App.jsx
└── main.jsx
```

## 🎯 Features Overview

- **Simple State Management**: Uses React Context API with useState and useEffect
- **Persistent Storage**: Todos are saved to localStorage
- **Clean UI**: Yellow color theme with intuitive interactions
- **Keyboard Shortcuts**: Enter to save, Escape to cancel
- **Character Limits**: 100 character limit for todos

Built as part of BuilderSoft development task.
