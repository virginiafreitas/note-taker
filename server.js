// imported required modules
const express = require('express'); // Imports the Express.js framework
const path = require('path'); // Imports Node.js path module for working with file paths
const fs = require('fs'); // Imports Node.js file system module for file operations

const app = express(); // Creates an instance of the Express application
const PORT = process.env.PORT || 3000; // Defines the port number to listen to

const { v4: uuidv4 } = require('uuid'); // Imports UUID (Universally Unique Identifier) module to generate unique IDs

const db = require('./db/db.json') // Imports the JSON file representing the database

// configure the middleware for the application
app.use(express.static('public')); // Serves static files from the "public" directory
app.use(express.urlencoded({ extended: true })); // Parses incoming request bodies with URL-encoded payloads
app.use(express.json()); // Parses incoming request bodies with JSON payloads

// Define routes and their respective handlers
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html'))); // Handles GET requests to the root path and serves the "index.html" file from the "public" directory.
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html'))); // Handles GET requests to the "/notes" path and serves the "notes.html" file from the "public" directory.
app.get('/api/notes', (req, res) => {
  const savedNotes = db;
  res.json(savedNotes)
}) // Handles GET requests to the "/api/notes" path and sends the saved notes from the database as JSON.

// Handles POST requests to the "/api/notes" path and adds a new note to the database.
app.post('/api/notes', (req, res) => {
  const newNote = {
    title: req.body.title, text: req.body.text, id: uuidv4()
  }
  const savedNote = db;
  savedNote.push(newNote);
  console.log(savedNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(savedNote));
  res.status(200).json(savedNote)
}) 

// Handles DELETE requests to the "/api/notes/:id" path and deletes a note from the database based on its ID.
app.delete('/api/notes/:id', (req, res) => {
  const savedNote = db;
  let noteID = req.params.id;
  for (let i = 0; i < savedNote.length; i++) {
    if (savedNote[i].id === noteID) {
      savedNote.splice(i, 1)
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNote));
  }
  res.status(200).json(savedNote)
})

// Starts the Express server and listens on the specified port. When the server starts, it logs a message to the console.
app.listen(PORT, () =>
  console.log(`Serving static asset routes on port at http://localhost:${PORT}!`)
);
