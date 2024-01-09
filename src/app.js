const express = require('express');

const { loginRoutes, userRoutes } = require('./routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);

module.exports = app;
