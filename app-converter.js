const express = require('express');

const app = express();
app.use(express.json());

app.post('/api/converter', (req, res) => {
    const data = req.body;
    
    if (!data.type) {
        res.send('Vous devez choisir un "type" de conversion.');
        return;
    }

    if (!data.value) {
        res.send('Vous devez entrer un paramètre "value".');
        return;
    }

    if (isNaN(data.value)) {
        res.send('Le paramètre "value" doit être un nombre.');
        return;
    }

    let feet = 0;
    let meter = 0;
    let celsius = 0;
    let fahrenheit = 0;
    let BTC = 0;
    let USD = 0;

    switch(data.type) {
        case "feet2meter":
            feet = data.value;
            meter = feet * 0.3048;

            res.send('La valeur ' + feet + ' en mètres = ' + meter);
            return;
        case "meter2feet":
            meter = data.value;
            feet = meter * 3.28084;

            res.send('La valeur ' + meter + ' en pieds = ' + feet);
            return;
        case "C2F":
            celsius = data.value;
            fahrenheit = (celsius * (9/5)) + 32
            
            res.send('La valeur ' + celsius + ' en fahrenheit = ' + fahrenheit + '°F');
            return;
        case "F2C":
            fahrenheit = data.value;
            celsius = (fahrenheit - 32) * (5/9);

            res.send('La valeur ' + fahrenheit + ' en celsius = ' + celsius + '°C');
            return;
        case "BTC2USD":
            BTC = data.value;
            USD = (fahrenheit - 32) * (5/9);

            

            res.send('La valeur ' + fahrenheit + ' en celsius = ' + celsius + '°C');
            return;
        case "USD2BTC":
            USD = data.value;
            BTC = (fahrenheit - 32) * (5/9);

            res.send('La valeur ' + fahrenheit + ' en celsius = ' + celsius + '°C');
            return;
        default:
            res.send('Ce type est indisponible.');
            return;
    }
  
});

app.listen(3000, () => console.log('Mon app écoute bien sur le port 3000.'));