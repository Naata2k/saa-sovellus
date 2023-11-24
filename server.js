const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();
 
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

// Kun käyttäjän puoli tekee pyynnön /weather endpointtiin niin funktio lähettää aina data.json tiedoston 
app.get('/weather', async (req, res) => {
  try {

    // Importataan node-fetch HTTP pyyntöjen tekoon
    const { default: fetch } = await import('node-fetch');

    const apiKey = process.env.API_KEY;
    const city = req.query.city;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    if (!city) {
      return res.status(400).json({ error: 'Kaupunkia ei ole annettu' });
    }

    // Tehdään pyyntö openweathermappiin ja odotetaan kunnes saadaan vastaukseksi json tiedosto
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Lähetetään vastauksena json tiedosto
    res.json(data);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Datan saanti epäonnistui' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
