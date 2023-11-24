koska en käytä EJS:ää niin minulla on serverin puoli ja asiakkaan puoli. Asiakkaan puolelta tulee pyyntö serverin puolelle jossa se fetchaa datan ja lähettää sen asiakaspuolelle, jossa haetaan dataa fetchin avulla, jotta voidaan päivittää HTML elementit.

API avaimen piilottamiseen katsoin ohjevideon: https://www.youtube.com/watch?v=17UVejOw3zA

script.js tiedoston koodi on saatu opetusvideosta linkki: https://www.youtube.com/watch?v=MIYQR-Ybrn4
Muutin else if lausekkeet switch caseksi sivun: https://www.w3schools.com/js/js_switch.asp mukaan
Halusin lisätä ohjelmaani näkyviin nykyisen päivämäärän jonka koodin löysin sivulta: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript, muutin päivien ja kuukausien paikat sekä vaihdoin välimerkit "/" pisteiksi
tein simppelin try and catch errorin videosta: https://www.youtube.com/watch?v=7nG2shBeWUo
löysin parantamista koodiini sivulta: https://medium.com/@sarahisdevs/creating-a-weather-app-with-node-js-and-express-js-is-a-fantastic-project-33b1bdedf49b otin sieltä paremman catch errorin
ja errorin jos kaupunkia ei ole annettu

Selvitin ChatGPT:n avulla miten saan asiakas puolelta tehtyä pyynnon serverin puolelle const apiUrl = "/weather"; chat gpt samalla päivitti asiakaspuolen fetchaus pyynnön oikeaan muotoon 
const response = await fetch(`${apiUrl}?city=${city}`); 
Minulle tuli jokin errori liittyen node fetchin importtaamiseen ja en löytänyt siihen vastausta googlesta, chatGPT antoi rivin, jonka avulla importtaan node fetchin onnistuneesti
const { default: fetch } = await import('node-fetch');

github sivulta: https://github.com/tweneboah/youtube-tutorials-projects/tree/nodejs-projects löytyi hyvä projekti jossa on selitetty tarkemmin mitä mikäkin rivi tekee


