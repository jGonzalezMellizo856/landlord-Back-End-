const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Import 'node-fetch' for making HTTP requests
const app = express();
const PORT = 3000;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

// Define a POST route to handle form submission
app.post('/upload', async (req, res) => {
    try {
        // Extract form data from the request body
        const { properties, license, image, address } = req.body;

        // Construct the payload to be sent to the Render API
        const payload = {
            properties,
            license,
            image,
            address
        };

        // Make a POST request to the Render API
        const response = await fetch('https://api.render.com/deploy/srv-cobpig5jm4es739ta7s0?key=bn7v8jQ4_7Y', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        // Check if the request was successful
        if (response.ok) {
            // If successful, parse the response JSON and send it back to the client
            const data = await response.json();
            res.json(data);
        } else {
            // If there was an error, throw an error with the status code
            throw new Error(`Request failed with status: ${response.status}`);
        }
    } catch (error) {
        // Handle any errors and send an error response to the client
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('CORS-enabled web server listening on port ${PORT}');
});
