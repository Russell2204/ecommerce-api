const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const productRoutes = require('./routes/products');
const app = express();

connectDB();

app.use(express.json()); 
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
});

