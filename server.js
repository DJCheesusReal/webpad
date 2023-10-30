const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.post('/play', (req, res) => {
    // Code to play music on your PC
    res.send('Playing music');
});

app.post('/pause', (req, res) => {
    // Code to pause music on your PC
    res.send('Pausing music');
});

app.post('/skip', (req, res) => {
    // Code to skip music on your PC
    res.send('Skipping music');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
