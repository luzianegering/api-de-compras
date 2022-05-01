const usuariosRoutes = require('./usuariosRoutes');


const express = require('express')
module.exports = (app) => {
    app.use(usuariosRoutes)
};
