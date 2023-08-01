// imported required modules
const express = require('express'); // Imports the Express.js framework
const path = require('path'); // Imports Node.js path module for working with file paths
const fs = require('fs'); // Imports Node.js file system module for file operations

const app = express(); // Creates an instance of the Express application
const PORT = 3000; // Defines the port number to listen to

const { v4: uuidv4 } = require('uuid'); // Imports UUID (Universally Unique Identifier) module to generate unique IDs

const db = require('./db/db.json') // Imports the JSON file representing the database

// configure the middleware for the application
app.use(express.static('public')); // Serves static files from the "public" directory
app.use(express.urlencoded({ extended: true })); // Parses incoming request bodies with URL-encoded payloads
app.use(express.json()); // Parses incoming request bodies with JSON payloads
