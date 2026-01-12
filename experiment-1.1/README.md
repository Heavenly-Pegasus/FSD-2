Experiment 1: Basic Single Page Application (SPA)
Overview

This project is developed as part of Full Stack – II (23CSH-382) for the 4th Semester (AI201) at the University Institute of Engineering, Department of AIT-CSE Core & AIML.

The objective of this experiment is to design and develop a Single Page Application (SPA) using a modern frontend framework (React) and tooling (Vite). The application demonstrates component-based architecture, client-side routing, state management using React hooks, API integration, and deployment using GitHub.

Experiment Objectives

The main objectives of this experiment are:

To understand SPA architecture and modern frontend frameworks

To set up a frontend development environment using Node.js and npm

To create reusable and modular React components

To implement client-side routing using React Router

To manage component state using React Hooks

To integrate and fetch data from external APIs

To build and deploy a production-ready SPA

Technologies Used

React

Vite

React Router DOM

JavaScript (ES6)

HTML5

CSS3

Node.js & npm

Git & GitHub

Project Directory Structure

my-spa/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ └── Navigation.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ └── Contact.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
└── .gitignore

Prerequisites

Before running this project, ensure that the following software is installed:

Node.js (version 16 or higher)

npm (version 7 or higher)

Git

A code editor (VS Code recommended)

Verify installation using:

node --version
npm --version
git --version

Installation and Setup
Step 1: Clone the Repository
git clone https://github.com/<your-username>/my-spa.git
cd my-spa

Step 2: Install Dependencies
npm install

Step 3: Start Development Server
npm run dev


The application will run at:

http://localhost:5173

Application Features
Home Page

Displays a welcome message using useEffect

Button click counter using useState

Demonstrates basic state management and component rendering

About Page

Fetches user data from JSONPlaceholder API

Uses useEffect for API calls

Displays loading and error states

Shows dynamic data rendering

Contact Page

Controlled form inputs

Form submission handling

Temporary success message after submission

Auto-reset of form fields

Routing

Implemented using React Router

Navigation without page reloads

True SPA behavior

Styling

Global CSS styling

Responsive layout

Clean and minimal UI design

Build for Production

To create an optimized production build:

npm run build


This generates a dist/ folder containing optimized static files.

Deployment

The application can be deployed using:

Netlify

Vercel

GitHub Pages

Deployment steps generally include:

Building the project using npm run build

Uploading or linking the dist/ folder to the hosting platform

Learning Outcomes

Through this experiment, the following concepts were learned:

Single Page Application architecture

React component-based design

Client-side routing

State management using React Hooks

API integration and data fetching

Form handling and validation

Deployment of frontend applications

Submission Details

Course: Full Stack – II (23CSH-382)

Experiment No: 1

Semester: 4th (AI201)

Academic Session: Jan–Jun 2026

Department: AIT-CSE Core & AIML

Faculty: Mr. Prince Pal Singh

Useful References

React Documentation: https://react.dev

Vite Documentation: https://vitejs.dev

React Router: https://reactrouter.com

JSONPlaceholder API: https://jsonplaceholder.typicode.com

Conclusion

This experiment successfully demonstrates the development of a basic Single Page Application using React and Vite. It provides practical exposure to modern frontend development practices and lays a strong foundation for advanced full-stack application development.
