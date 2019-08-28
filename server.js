'use strict'

// Environmnet variables
require('dotenv').config();

// Application Dependencies
const express = require('express');

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// View engine for server-side rendering template (EJS)
app.set('view engine', 'ejs');

// Listen for request to the server 
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));