const express = require('express');
const app = express();
//connect DB
const connectDB = require('./config/db');
connectDB();
app.get('/', (req, res) => res.send('API Running successfully'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ', PORT) );