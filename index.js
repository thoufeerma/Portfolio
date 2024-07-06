const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Serve static files from the 'public' folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route to serve login.html from the project folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Route to handle form data submission
app.post('/formData', (req, res) => {
    console.log(req.body);
    res.json({ message: "Form data received", data: req.body });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
