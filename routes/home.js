const express = require('express');
const router = express.Router();
const { getDB, executeQuery } = require('../database/db')
let response = {}

router.get('/', async (req, res) => {
    const db = await getDB()
    let statuses = await executeQuery(db, 'select * from status')
    statuses = toJsonConversation(statuses, 'STATUS')
    
    let categories = await executeQuery(db, 'select first 10 Description from category')
    categories = toJsonConversation(categories,'DESCRIPTION')

    
    let damageTypes = await executeQuery(db, 'select * from damagetype')
    damageTypes = toJsonConversation(damageTypes,'DAMAGETYPE')

    let basisTypes = await executeQuery(db, 'select * from basistype')
    basisTypes = toJsonConversation(basisTypes,'BASISTYPEDESC')

    response.status = statuses;
    response.category = categories;
    response.damageType = damageTypes;
    response.basisType = basisTypes;
    

    res.send(response)
})

function toJsonConversation(statuses, property) {
    return statuses.map(row => {
        return ab2str(row[property])
    })
}


function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

module.exports = router;