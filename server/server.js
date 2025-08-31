console.log("👌 Starting Server.js");


//connection code
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

console.log("🔧 Environment variables loaded");

const app = express();

app.use(cors());
app.use(express.json());

//Routes
const messageRoutes = require('./routes/Messages');
app.use('/api/messages', messageRoutes);

const projectRoutes = require('./routes/Projects');
app.use('/api/projects', projectRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });

