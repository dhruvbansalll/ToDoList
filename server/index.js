const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');
require('dotenv').config();

connectToMongo();

const app = express();
// const port = 5000;
const port = process.env.PORT;
app.use(cors());

app.use(express.json()) //to use json in req and res
//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/', require('./routes/home'))

app.listen(port || 5000, () => {})