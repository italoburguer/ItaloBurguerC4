const express = require ('express');
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

const authRoutesAdmin = require("./routers/auth");
const adminRoutes = require('./routers/admin');
const platoRoutes = require('./routers/plato');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(`/api/${API_VERSION}`, platoRoutes)
app.use(`/api/${API_VERSION}`, authRoutesAdmin);
app.use(`/api/${API_VERSION}`, adminRoutes);

module.exports = app;