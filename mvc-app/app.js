const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB (local database or MongoDB Atlas string)
mongoose.connect('mongodb://127.0.0.1:27017/mvcDB')
  .then(() => console.log('Connected to MongoDB successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// set EJS as template engine
app.set('view.engine', 'ejs');

//Body parsing middleware
app.use(express.urlencoded({ extended: true }));

//Map user routes
app.use('/users', userRoutes);

app.listen(3000, () => {
    consloe.log('Server running  at http://localhost:3000');
});
