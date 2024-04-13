const express = require('express');
const app = express();
var cors = require('cors');
const PORT  = 10000;

app.use(cors());
app.use(express.json());

app.get('/products/:id', function (req, res, next){
    res.json({ msg: 'This is CORS-enabled for all origins!' })

});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({message: 'data recieved on server'});
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`ors-enabled web server listening on ${PORT}`);
});

fetch('your_api_endpoint', {
  method: 'POST',
  body: JSON.stringify(data), // Your request data
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Response data:', data);
})
.catch(error => {
  console.error('Error:', error);
});

