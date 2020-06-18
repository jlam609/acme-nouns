const Sequelize = require('sequelize')
const DBURL = process.env.DBURL || 'postgres://localhost:5432/acmenouns0617'
const db = new Sequelize(DBURL)

module.exports = {db}