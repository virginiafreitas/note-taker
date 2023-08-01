# Note Taker Application
  [![GitHub License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

### Description:
The project is an assignment of a coding bootcamp program, with the purpose for students learn how to use Node.js and Express.js. In this project I have added logic and functionality to the application provided an existing html and css code. The goal was to make this application function to write, save, access and delete notes, so that a small business owner can organize his thoughts and keep track of tasks to complete. When opening the intro page of the note taker, the user should be presented with a landing page with a link to a notes page. Then, when clicking on the link to the notes page, the user is presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column. When entering a new note title and note's text, then a save icon should appear in the navigation at the top of the page. When clicking on the save icon, then the new note entered should be saved and appear in the left-hand column with the other existing notes. When clicking on an existing note in the list in the left-hand column, then that note should appear in the right-hand column. When clicking on the write icon in the navigation at the top of the page, then the user should be presented with empty fields to enter a new note title and the note’s text in the right-hand column.

  ### Installation:
Cloned the initial code git repository. Added the following commands to the terminal: "npm i", "npm start", "node server.js", "npm install --save-dev nodemon", "npm install uuid", "nodeman server.js", "npm run develop". Imported the required modules. The necessary Node.js modules and Express.js framework were imported to enable building the web application. The Express.js framework, which provides a set of functionalities for building web applications, was imported. The Express.js framework, which provides a set of functionalities for building web applications, was imported. The fs module from Node.js was imported to manage file operations within the application. An instance of the Express application was created to define and handle routes. The application was configured to listen on a specific port number to handle incoming requests. The uuid module was imported to generate unique IDs for the notes in the database. A JSON file representing the database was imported to store and retrieve notes data. Middleware functions were configured to handle various aspects of the application, such as parsing incoming request bodies and serving static files. Static files, such as HTML, CSS, and JavaScript, were served from the "public" directory to enable client-side functionality. Middleware was set up to parse incoming request bodies with URL-encoded payloads, allowing data to be extracted from incoming POST requests. Middleware was set up to parse incoming request bodies with JSON payloads, enabling the application to handle data sent as JSON in POST requests. Routes and their corresponding handler functions were defined to handle specific HTTP requests. A route was defined to handle GET requests to the root path and serve the "index.html" file from the "public" directory. A route was defined to handle GET requests to the "/notes" path and serve the "notes.html" file from the "public" directory. A route was defined to handle GET requests to the "/api/notes" path and send the saved notes from the database as JSON. A route was defined to handle POST requests to the "/api/notes" path and add a new note to the database. A route was defined to handle DELETE requests to the "/api/notes/:id" path and delete a note from the database based on its ID. The Express server was started, and it began listening on the specified port number. Upon successful server startup, a message was logged to the console. 

  ### Usage:
  [Click here to test the deployed application](https://sheltered-depths-05983-c3b5f6fbd222.herokuapp.com/). This URL will open the browser with the application page. The initial page should display an introductory section about taking notes with Express and a button to get started. Click on the Get Started button. Click on "Note Title" to type a title to your note, and then on "Note Text" to type a description to your note. Then click on the save button that will display on the top-right side after you typed your note. That note should display on the list on the left side. Repeat for as many notes as you want. To access a note, click on its title on the left side, and the note with description should display on the right side. To delete a note, click on the delete button that is shown right next to the note title on the left side column. To add a new note, click on the plus sign on the top right side of the page. 

  ### Contributing
  I have received advice from the UC Berkeley Extension tutors Henry Weigand on pseudocoding, and Corrado Alfano on debugging my code. I also reached out to the [Mozilla Developer](https://developer.mozilla.org/en-US/) webpage and [NPM Docs](https://docs.npmjs.com/) for documentation.

  ### Developer Information:
  - Virginia Freitas
  - GitHub URL: https://github.com/virginiafreitas
  - e-mail address: virginiacdefreitas@gmail.com

  ### License:
  The application is covered under the MIT license.

  ### Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * Developer Information
  * [License](#license)
  
