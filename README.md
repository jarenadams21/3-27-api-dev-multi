# MULTI Code 4 Ca$h --> 3/27 "API DEVELOPMENT"

- >_ backend folder : expressjs server for api calls
- >_ frontend folder : components & utility functions

## Component Overview
* /chakra
    - Navbar.js : Navbar component containing user specific information.. what's that broken button about?
* /components
    - MessageList.js : renders the messages array retrieved from the express server (localhost:8080/messages)
    - SpinningLogo.js : MULTI logo, spins if clicked
    - UserInput.js : currently takes any user text-based input and appends to the message list.
* /media
    - images used in the app

## Clone and initialize the repository to your local machine:

1. git clone https://github.com/your-username/your-repository-name.git
2. Navigate to the cloned directory: cd your-repository-name
3. 'npm install' and 'npm start' in backend folder
3. 'npm install' and 'npm start' in frontend folder
4. Start hacking!

- >_ The frontend server will start running on http://localhost:3000
- >_ The backend server will start running on http://localhost:8080

## Introduction
This repository contains a simple Express server boilerplate using ES Module syntax, it's an ideal starting point focusing on a minimalistic and clean structure.

## Boilerplate Overview
The boilerplate includes a basic Express server setup with ES Modules, featuring a couple of routes and a middleware for handling 404 errors.

## Key Features:
- ES Module Syntax: Utilizes import and export instead of CommonJS's require.
- Basic Routing: Includes a root route and a /users route to demonstrate basic routing and differing return types in Express.
- JSON Middleware: Uses express.json() middleware to handle JSON request payloads.
- 404 Error Handling: Implements a simple middleware to handle unmatched routes.
- Git Ignore: don't push private or large numbers of files! (Currently ignores /node_modules and .env for security!)

## Route Types:
* For a [POST] request, the payload typically includes the data you want to send to the server (the details of a new user you want to create for example)
* In a [GET] request, there is no body payload, and the data of interest is often requested in the query string or route parameters.