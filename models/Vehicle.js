const mongoose = require('mongoose')

const Vehicle = mongoose.model('Vehicle', {
  placa: String,
  marca: String,
  modelo: String,
  ano: Number,
})

module.exports = Vehicle