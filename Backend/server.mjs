import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // This line loads the environment variables from the .env file
const app = express();
const API_KEY = process.env.API_KEY; // Accessing the API key from the environment variables

// Use CORS middleware to by pass the CORS error
app.use(cors({
  origin: 'http://localhost:3001' // Replace with your frontend's origin
}));

app.get('/api/data', async (req, res) => {
  const { month } = req.query;
  const response = await fetch(`https://api.nytimes.com/svc/archive/v1/2024/${month}.json?api-key=${API_KEY}`);
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));