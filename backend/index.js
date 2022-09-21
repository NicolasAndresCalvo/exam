const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()

var monngoURL = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`

mongoose.connect(monngoURL, { useNewUrlParser: true })
    .then(
        () => {
            console.log("Me conecte a MongoDB bien! 😊");
        }
    ).catch((error) => {
        console.log("No me pude contectar a MongoDB! Algo paso!! Ayuda! ☹️");
    });

app.listen(process.env.BACKEND_PORT, function() {
    console.log(`Escuchando en el puerto ${process.env.BACKEND_PORT} 🎧`)
});

app.get('/api', (req, res) => {
    res.send('Hola Mundo desde el Backend! 😊')
})