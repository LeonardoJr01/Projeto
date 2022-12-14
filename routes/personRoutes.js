const router = require('express').Router()

const Person = require('../models/Person')

router.post('/', async (req, res) => {
    const { nome, email, telefone, senha } = req.body

    if(!nome) {
      res.status(422).json({ error: 'O nome é obrigatório!'})
      return
    }

    if(!email) {
      res.status(422).json({ error: 'O nome é obrigatório!'})
      return
    }

    if(!telefone) {
      res.status(422).json({ error: 'O nome é obrigatório!'})
      return
    }

    if(!senha) {
      res.status(422).json({ error: 'O nome é obrigatório!'})
      return
    }
  
    const person = {
      nome,
      email,
      telefone,
      senha
    }
  
    try {
      await Person.create(person)
  
      res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/', async (req, res) => {
    try {
      const people = await Person.find()
  
      res.status(200).json(people)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const person = await Person.findOne({ _id: id })
  
      if (!person) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
      }
  
      res.status(200).json(person)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.patch('/:id', async (req, res) => {
    const id = req.params.id
  
    const { nome, email, telefone, senha } = req.body
  
    const person = {
      nome,
      email,
      telefone,
      senha
    }
  
    try {
      const updatedPerson = await Person.updateOne({ _id: id }, person)
  
      if (updatedPerson.matchedCount === 0) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
      }
  
      res.status(200).json(person)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const person = await Person.findOne({ _id: id })
  
    if (!person) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }
  
    try {
      await Person.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Usuário removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  module.exports = router