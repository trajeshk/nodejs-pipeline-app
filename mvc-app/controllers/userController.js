const User = require('../models/userModel');

// Fetch all users from the database
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.render('users', { users });
    } catch (error) {
        res.status(500).send('Error retrieving users from database');
    }
};

// Insert a new user into the database
exports.createUser = async (req, res) => {
    const { name } = req.body;
    try {
        if (name) {
            await User.create({ name });
        }
        res.redirect('/users');
    } catch (error) {
        res.status(400).send('Error creating user: ' + error.message);
    }
};
