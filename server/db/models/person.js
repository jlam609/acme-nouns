const { INTEGER, STRING, UUID, UUIDV4 } = require('sequelize');
const  {db}  = require('../db');

const Person = db.define('Person', {
    id:{
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: {
        type:STRING,
        allowNull:false,
        unique:true
    }
})

module.exports = Person