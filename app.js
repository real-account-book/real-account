const express = require('express');
const app = express();

app.listen(8888);

const minusRouter = require('./routes/minus');
const plusRouter = require('./routes/plus');
const categoryRouter = require('./routes/category');
const monthRouter = require('./routes/month');
const yearRouter = require('./routes/year');
const dayRouter = require('./routes/day');

app.use('/minus', minusRouter);
app.use('/plus', plusRouter);
app.use('/category', categoryRouter);
app.use('/month', monthRouter);
app.use('/year', yearRouter);
app.use('/day', dayRouter);