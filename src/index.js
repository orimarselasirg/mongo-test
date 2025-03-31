// Import necessary modules
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const database = require('./database/database');
const userRoutes = require('./routes/user.routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);


app.listen(PORT, () => {
    database.mongoConnect();
    console.log(`Server running on http://localhost:${PORT}`);
});
