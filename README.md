# Project Setup Guide

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Starts the development server.  
Open [http://localhost:5173/](http://localhost:5173/) to view the app in your browser.  

The server supports hot module replacement, so any changes you make will automatically reload the app in the browser.

---

### `npm run build`

Builds the app for production.  
The production-ready files will be generated in the `dist` folder.  
The app is optimized and minified for the best performance.  

---

### `npm run preview`

Runs a local server to preview the production build.  
This is helpful to test the production files before deploying them.

---

## Overview

This project has been set up with all the necessary tools to make development smooth and efficient. Here's what has been configured:

- **Vite**: A fast build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework for rapid styling.
- **ShadCN**: A library for building customizable and accessible UI components.
- **Prettier**: A code formatter to ensure consistent code style.
- **ESLint**: A tool to analyze and improve code quality.
---

## How to Get Started?

1. **Ensure Node.js is Installed**
   - Recommended version: 16 or higher. If Node.js is not installed, download it from here: [Node.js](https://nodejs.org/).

2. **Install Dependencies**
   - When you first open the project, install all required packages by running:
     ```bash
     npm install
     ```

3. **Run the Project**
   - Start the development server:
     ```bash
     npm run dev
     ```
   - Open [http://localhost:5173/](http://localhost:5173/) to view the app.

---
### Additional Commands

1. **Format Code**
   - Use Prettier to format the code manually:
     ```bash
     npm run format
     ```

2. **Check Code Quality**
   - Run ESLint to check for code quality issues:
     ```bash
     npm run lint
     ```

