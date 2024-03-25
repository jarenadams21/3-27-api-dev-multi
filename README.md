# MULTI Code 4 Ca$h --> 3/27 "API DEVELOPMENT"

## Clone and initialize the repository to your local machine:

1. git clone https://github.com/your-username/your-repository-name.git
2. Navigate to the cloned directory: cd your-repository-name
3. npm install
4. Start the server: npm start

The server will start running on http://localhost:3000

## Introduction
This repository contains a simple Express server boilerplate using ES Module syntax, it's an ideal starting point focusing on a minimalistic and clean structure.

## Boilerplate Overview
The boilerplate includes a basic Express server setup with ES Modules, featuring a couple of routes and a middleware for handling 404 errors.

## Key Features:
- ES Module Syntax: Utilizes import and export instead of CommonJS's require.
- Basic Routing: Includes a root route and a /users route to demonstrate basic routing and differing return types in Express.
- JSON Middleware: Uses express.json() middleware to handle JSON request payloads.
- 404 Error Handling: Implements a simple middleware to handle unmatched routes.

## Route Types:
* For a [POST] request, the payload typically includes the data you want to send to the server (the details of a new user you want to create for example)
* In a [GET] request, there is no body payload, and the data of interest is often requested in the query string or route parameters.