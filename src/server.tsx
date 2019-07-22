import mongoose from 'mongoose'
import express from 'express'
import jwt from 'jsonwebtoken'
import exjwt from 'express-jwt'
import cors from 'cors'

const Schema = mongoose.Schema
const app = express()
const jsonParser = express.json()

app.use(cors())
const jwtMW = exjwt({
  secret: 'my Todo App',
})

const userScheme = new Schema(
  { data: String, userId: String, completed: Boolean, userName: String },
  { versionKey: false }
)

const User = mongoose.model('User', userScheme)

mongoose.connect(
  'mongodb://localhost:27017/usersdb',
  { useNewUrlParser: true },
  function(err) {
    if (err) return console.log(err)
    app.listen(3001, function() {
      console.log('Сервер ожидает подключения...')
    })
  }
)

app.get('/api/users', jwtMW, function(req: any, res) {
  User.find({ userName: req.user.userName }, function(err, users) {
    if (err) return console.log(err)
    res.send(users)
  })
})

interface IRequest<T> {
  body: T;
}
interface IUserModel extends mongoose.Document {
  data: string;
  userName: string;
}

app.post('/api/users', jwtMW, jsonParser, function(
  req: IRequest<IUserModel>,
  res
) {
  if (!req.body) return res.sendStatus(400)

  const user = new User({
    data: req.body.data,
    completed: false,
    userName: req.body.userName,
  })

  user.save(function(err: any) {
    if (err) return console.log(err)
    res.send(user)
  })
})

app.post('/api/token', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400)
  const { data } = req.body

  let token = jwt.sign({ userName: data }, 'my Todo App', {
    expiresIn: 129600,
  })
  res.json({
    token,
  })
})

app.delete('/api/users/:id', jwtMW, function(req, res) {
  const id = req.params.id
  User.findByIdAndDelete(id, function(err, user) {
    if (err) return console.log(err)
    res.send(user)
  })
})

app.put('/api/users', jwtMW, jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400)
  const { id } = req.body
  const { completed } = req.body
  const changeTodo = { completed: completed }
  User.findOneAndUpdate({ _id: id }, changeTodo, { new: true }, function(
    err,
    user
  ) {
    if (err) return console.log(err)
    res.send(user)
  })
})

app.use(function(err: any, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('err')
  } else {
    next(err)
  }
})
