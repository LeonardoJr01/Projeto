const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
  nome: String,
  email: String,
  telefone: Number,
  senha: String,
})

module.exports = Person