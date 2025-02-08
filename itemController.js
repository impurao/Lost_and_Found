const Item = require('../models/Item');

const reportLostItem = async (req, res) => {
    const { name, category, description, location, date, reporter, image } = req.body;

    try {
        const item = new Item({
            name,
            category,
            description,
            location,
            status: 'lost',
            date,
            reporter,
            image,
        });

        await item.save();
        res.status(201).json({ message: 'Lost item reported successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const reportFoundItem = async (req, res) => {
    const { name, category, description, location, date, reporter, image } = req.body;

    try {
        const item = new Item({
            name,
            category,
            description,
            location,
            status: 'found',
            date,
            reporter,
            image,
        });

        await item.save();
        res.status(201).json({ message: 'Found item reported successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const searchItems = async (req, res) => {
    const { category, date, location, status } = req.query;

    try {
        const items = await Item.find({
            category: category || { $exists: true },
            date: date || { $exists: true },
            location: location || { $exists: true },
            status: status || { $exists: true },
        });

        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { reportLostItem, reportFoundItem, searchItems };