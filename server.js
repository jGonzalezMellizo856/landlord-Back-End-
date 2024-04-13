const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

// Define a route to proxy requests to the Render API
app.post('/upload', async (req, res) => {
    try {
        const url = 'https://api.render.com/deploy/srv-cobpig5jm4es739ta7s0?key=bn7v8jQ4_7Y';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
