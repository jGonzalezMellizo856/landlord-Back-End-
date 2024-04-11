const express = require('express');
const app = express();
const PORT  = 10000;


app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({message: 'data recieved on server'});
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
