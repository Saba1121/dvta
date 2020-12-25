const express = require('express');
const app = express();
const data = require('./news.js');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/api/news', (req, res) => {
    res.status(200).send(data);
})



app.listen(3000, () => console.log('Server Started'))