const router = require('express').Router()

const Vehicle = require('../models/Vehicle')

router.post('/', async (req, res) => {
    const { placa, marca, modelo, ano } = req.body

    if(!placa) {
      res.status(422).json({ error: 'A placa é obrigatório!'})
      return
    }

    if(!marca) {
      res.status(422).json({ error: 'A marca é obrigatório!'})
      return
    }

    if(!modelo) {
      res.status(422).json({ error: 'O modelo é obrigatório!'})
      return
    }

    if(!ano) {
      res.status(422).json({ error: 'O ano é obrigatório!'})
      return
    }
  
    const vehicle = {
      placa,
      marca,
      modelo,
      ano
    }
  
    try {
      await Vehicle.create(vehicle)
  
      res.status(201).json({ message: 'Veículo inserido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/', async (req, res) => {
    try {
      const vehicles = await Vehicle.find()
  
      res.status(200).json(people)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const vehicle = await Vehicle.findOne({ _id: id })
  
      if (!vehicle) {
        res.status(422).json({ message: 'Veículo não encontrado!' })
        return
      }
  
      res.status(200).json(vehicle)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.patch('/:id', async (req, res) => {
    const id = req.params.id
  
    const { placa, marca, modelo, ano } = req.body
  
    const person = {
      placa,
      marca,
      modelo,
      ano
    }
  
    try {
      const updatedVehicle = await Vehicle.updateOne({ _id: id }, vehicle)
  
      if (updatedVehicle.matchedCount === 0) {
        res.status(422).json({ message: 'Veículo não encontrado!' })
        return
      }
  
      res.status(200).json(vehicle)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const vehicle = await Vehicle.findOne({ _id: id })
  
    if (!vehicle) {
      res.status(422).json({ message: 'Veículo não encontrado!' })
      return
    }
  
    try {
      await Vehicle.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Veículo removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  module.exports = router