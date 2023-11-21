const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  try {
    const { default: fetch } = await import('node-fetch');
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error('API key not found');
    }

    const city = req.query.city;

    if (!city) {
      throw new Error('City not provided');
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
