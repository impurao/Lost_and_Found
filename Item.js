const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, required: true, enum: ['lost', 'found', 'claimed'] },
    date: { type: Date, required: true },
    reporter: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
    image: { type: String },
});

module.exports = mongoose.model('Item', itemSchema);