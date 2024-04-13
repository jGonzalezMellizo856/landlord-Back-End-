const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

// Define a POST route to handle form submission
app.post('/upload', (req, res) => {
    // Process the form data here
    console.log(req.body); // Log the received data to the console
    res.json({ message: 'Data received on server' }); // Respond with a message
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('CORS-enabled web server listening on port ${PORT}');
});
