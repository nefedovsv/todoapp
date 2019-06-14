const mongoose = require('mongoose')
const express = require('express')
const Schema = mongoose.Schema
const app = express()
var cors = require('cors')
const jsonParser = express.json()
app.use(cors())
const userScheme = new Schema(
  { name: String, age: Number },
  { versionKey: false }
)
const User = mongoose.model('User', userScheme)

mongoose.connect(
  'mongodb://localhost:27017/usersdb',
  { useNewUrlParser: true },
  function(err) {
    if (err) return console.log(err)
    app.listen(3000, function() {
      console.log('Сервер ожидает подключения...')
    })
  }
)

app.get('/api/users', function(req, res) {
  User.find({}, function(err, users) {
    if (err) return console.log(err)
    res.send(users)
  })
})

app.get('/api/users/:id', function(req, res) {
  const id = req.params.id
  User.findOne({ _id: id }, function(err, user) {
    if (err) return console.log(err)
    res.send(user)
  })
})

app.post('/api/users', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400)

  const userName = req.body.name
  const userAge = req.body.age
  const user = new User({ name: userName, age: userAge })

  user.save(function(err) {
    if (err) return console.log(err)
    res.send(user)
  })
})

app.delete('/api/users/:id', function(req, res) {
  const id = req.params.id
  User.findByIdAndDelete(id, function(err, user) {
    if (err) return console.log(err)
    res.send(user)
  })
})

app.put('/api/users', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400)
  const id = req.body.id
  const userName = req.body.name
  const userAge = req.body.age
  const newUser = { age: userAge, name: userName }

  User.findOneAndUpdate({ _id: id }, newUser, { new: true }, function(
    err,
    user
  ) {
    if (err) return console.log(err)
    res.send(user)
  })
})
/*
mongodb and express
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const objectId = require('mongodb').ObjectID
const bodyParser = require('body-parser')
const app = express()
//const jsonParser = express.json()

const mongoClient = new MongoClient('mongodb://localhost:27017/', {
  useNewUrlParser: true,
})

let dbClient
app.use(bodyParser.urlencoded({ extended: true }))

mongoClient.connect(function(err, client) {
  if (err) return console.log(err)
  dbClient = client
  app.locals.collection = client.db('usersdb').collection('users')
  app.listen(3000, function() {
    console.log('Сервер ожидает подключения...')
  })
})

app.get('/api/users', function(req, res) {
  const collection = app.locals.collection
  collection.find({}).toArray(function(err, users) {
    if (err) return console.log(err)
    res.send(users)
  })
})

app.get('/api/users/:identy', function(req, res) {
  const id = new objectId(req.params.identy)
  const collection = app.locals.collection
  collection.findOne({ _id: id }, function(err, user) {
    if (err) return console.log(err)
    res.send(user)
  })
})

app.post('/api/users', function(req, res) {
  if (!req.body) return res.sendStatus(400)
  const { name, age } = req.body
  const user = { name, age }
  const collection = app.locals.collection
  collection.insertOne(user, function(err, result) {
    if (err) return console.log(err)
    res.send(user)
  })
})

app.delete('/api/users/:id', function(req, res) {
  const id = new objectId(req.params.id)
  const collection = app.locals.collection
  collection.findOneAndDelete({ _id: id }, function(err, result) {
    if (err) return console.log(err)
    let user = result.value
    res.send(user)
  })
})

app.put('/api/users', function(req, res) {
  if (!req.body) return res.sendStatus(400)
  //const id = new objectId(req.body.id)
  console.log(req.body.name, req.body.age)
  const userName = req.body.name
  const userAge = req.body.age

  const collection = app.locals.collection

  collection.findOneAndUpdate(
    { name: 'Sergey' },
    { $set: { age: userAge, name: userName } },
    { returnOriginal: false },
    function(err, result) {
      if (err) return console.log(err)
      const user = result.value
      res.send(user)
    }
  )
})

// прослушиваем прерывание работы программы (ctrl-c)
process.on('SIGINT', () => {
  dbClient.close()
  process.exit()
})
*/
