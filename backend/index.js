require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

// Import routes
const contactRoutes = require('./routes/contact');
// Use routes
app.use('/api', contactRoutes);

// Connect to MongoDB
const isProd = process.env.NODE_ENV === "production";
const mongoURI = isProd  ? process.env.MONGODB_ATLAS : process.env.MONGODB_LOCAL;
mongoose.connect(mongoURI || "mongodb://localhost:27017/uniqueleads")
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
    console.log('env_congig:',process.env.EMAIL_USER);
    
  console.log(`Server is running on http://localhost:${port}`);
});