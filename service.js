console.log('Added new Functionality');

// Import the required modules/**Added Login functionality */

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
 
/**Added New Functionality */
    // Middleware to parse JSON request bodies
app.use(express.json());