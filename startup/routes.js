const express = require('express');
const cors = require('cors');
const contacts = require('../routes/contacts');
const home = require('../routes/home')

module.exports = function (app) {
    app.use(cors({ exposedHeaders: 'x-auth-token' }));
    app.use(express.json());
    app.use('/', home);
    app.use('/api/contacts', contacts);
}
