const express = require('express');
const Enigma = require('./modules/Enigma');

const app = express();
app.use(express.static('public'));
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port);


const enigma = new Enigma();

app.post('/api', (req, res)=> {

    const data = req.body;

    const text = data.text.split(' ').join("^");

    const result = enigma.cesar(text, data.encrypt);
    
    res.json({result});

    res.end();
});