const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

app.listen(process.env.PORT || 5000);
