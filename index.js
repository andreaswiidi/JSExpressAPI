const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/employees',require('./routes/employees.js'));

app.listen(PORT, () => console.log(`Server Running on Port : http://localhost:${PORT}`));
