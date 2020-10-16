const express = require('express');
const router = express.Router();
const { getDB, executeQuery } = require('../database/db')

router.get('/', async (req, res) => {
    const db = await getDB()
    const contacts = await executeQuery(db,'SELECT FIRST 10 FIRSTNAME FROM CONTACT')
    res.send(contacts)
})

router.post('/', async (req, res) => {
    const db = await getDB()
    const contacts = await executeQuery(db,"INSERT INTO CONTACT(CONTACT,FIRSTNAME,LASTNAME) values ('Hemkant Gangurde', Hemkant', 'Gangurde')")
    res.send(contacts)
})


function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
 }


module.exports = router;