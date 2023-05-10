
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes')
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes')

// middle ware
app.use(cors());
// app.use(morgan('dev'))
app.use(express.json());

app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)
app.use('/orders', orderRoutes)
app.use('/users', userRoutes)

app.get('/', async (req, res) => {
    res.send('watch resale store Server is running');
});


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mocp3sw.mongodb.net/resalewatch`;
mongoose.connect(uri);

app.listen(port, () => {
    console.log(`watch resale store running on: ${port}`);
});


