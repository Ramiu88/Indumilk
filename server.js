const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

/**
 * @api {get} /api/products Get All Products
 * Returns a JSON array of all products.
 */
app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        console.error('Failed to fetch products:', error);
        res.status(500).json({ message: 'Error fetching data from the database' });
    }
});

/**
 * @api {get} /api/products/:id Get a Single Product
 * Returns a single product object if found, otherwise a 404 error.
 * @param {string} id The unique ID of the product.
 */
app.get('/api/products/:id', async (req, res) => {
    try {
        const productId = parseInt(req.params.id, 10);
        // Use a parameterized query to prevent SQL injection
        const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [productId]);
        
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(`Failed to fetch product with id ${req.params.id}:`, error);
        res.status(500).json({ message: 'Error fetching data from the database' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Available endpoints:');
    console.log(`  GET http://localhost:${port}/api/products`);
    console.log(`  GET http://localhost:${port}/api/products/:id (e.g., /api/products/1)`);
});