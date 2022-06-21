const moogose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
    try {
        await moogose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Banco conectado! Perfeitamente!')
    } catch(error) {
        console.error(error)
    }
}

module.exports = { connect }