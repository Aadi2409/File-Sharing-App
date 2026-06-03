const express = require('express');
const cors = require('cors');
const DbConnection = require('./database/db');
const router = require('./routes/fileRoutes');
const app = express();

app.use(cors());
DbConnection();
app.use('/', router);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});