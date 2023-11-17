const mongoose = require('mongoose')

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  buyerPersona: {
    type: String,
    required: true
  },
  convertedToBuyer: {
    type: String,
    required: true
  },
  // other leads data
})

module.exports = mongoose.model('People', peopleSchema)
