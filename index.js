const express = require('express')
const app = express()
 
const mongoose = require('mongoose')
const Person = require('./models/Person')
const Vehicle = require('./models/Vehicle')


//middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

const vehicleRoutes = require('./routes/vehicleRoutes')
app.use('/vehicle', vehicleRoutes)

// rota inicial
app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' })
})

mongoose
  .connect(
    'mongodb+srv://user:password@apicluster.bskrwij.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Conectou ao Mongoose!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))