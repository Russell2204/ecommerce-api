const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ruslanabdjemilov:4ai14rY2xWkDHdm1@cluster0.q11b5.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0'); // Просто передай строку подключения
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
