const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js")

const app = express();

const PORT = process.env.PORT || 5000;

require('dotenv').config(); // this will allow us to call enviroment variables right inside our node application

app.use(cors()); // Cross origin resource sharing enables the browser to load resources from other domains 
app.use(express.json()); // 
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send("hello world");
})

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})