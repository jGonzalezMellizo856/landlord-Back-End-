const express = require('express');
const app = express();
var cors = require('cors');
const PORT  = 10000;

const allowedOrigins = ['https://mstfazmni.github.io/Final-Project/landlord.html?properties=Apartments&image=burnaby.jpg'];

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is allowed or if it's a browser preflight request
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};




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
