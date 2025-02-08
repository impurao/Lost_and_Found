const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    usn: { type: String, required: true, unique: true },
    college: { type: String, required: true },
    semester: { type: Number, required: true },
    branch: { type: String, required: true },
    password: { type: String, required: true },
    aadharImage: { type: String, required: true },
    collegeIdImage: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);