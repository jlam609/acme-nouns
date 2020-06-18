const { INTEGER, STRING, UUID, UUIDV4 } = require('sequelize');
const  {db}  = require('../db');

const Place = db.define('Place', {
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

module.exports = Place