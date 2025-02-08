const User = require('../models/User');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    const { name, email, usn, college, semester, branch, password, aadharImage, collegeIdImage } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            usn,
            college,
            semester,
            branch,
            password: hashedPassword,
            aadharImage,
            collegeIdImage,
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { signup, login };