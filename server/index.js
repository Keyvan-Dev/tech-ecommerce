// Express
import express from 'express';

// Dotenv
import dotenv from 'dotenv';
dotenv.config();

// Cors
import cors from 'cors';

// Db.js
import connectToDatabase from './db.js';
connectToDatabase();

// Routes
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);

const port = 5000;

app.get('/', (req, res) => {
	res.send('Api is running...');
});

app.listen(port, () => {
	console.log(`Server runs on port ${port}`);
});
