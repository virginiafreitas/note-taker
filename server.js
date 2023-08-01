// imported required modules
const express = require('express'); // Imports the Express.js framework
const path = require('path'); // Imports Node.js path module for working with file paths
const fs = require('fs'); // Imports Node.js file system module for file operations

const app = express(); // Creates an instance of the Express application
const PORT = 3000; // Defines the port number to listen to

const { v4: uuidv4 } = require('uuid'); // Imports UUID (Universally Unique Identifier) module to generate unique IDs

