const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'dude' });
});

app.listen(process.env.PORT || 5000);
