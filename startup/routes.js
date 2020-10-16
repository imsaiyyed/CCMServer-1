const express = require('express');
const cors = require('cors');
const contacts = require('../routes/contacts');


module.exports = function (app) {
    app.use(cors({ exposedHeaders: 'x-auth-token' }));
    app.use(express.json());
    app.use('/api/contacts', contacts);
}
