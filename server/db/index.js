const {db} = require('./db')
const {Person, Place, Thing } = require('./models/index.js')

Person.belongsTo(Place)
Place.hasMany(Person)
Thing.belongsTo(Person)
Person.hasMany(Thing)

const seed = async(force = false) => {
    try{
        await db.sync({force})
        console.log('connected')
    } catch(e){
        console.log('error running')
        throw e
    }
};

module.exports = {
    seed,
    db,
    Person,
    Place,
    Thing
}