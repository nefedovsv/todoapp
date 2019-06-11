const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'
const mongoClient = new MongoClient(url, { useNewUrlParser: true })
//let user = { name: 'Bob1', age: 334 }
mongoClient.connect(function(err, client) {
  const db = client.db('sergey1')
  const collection = db.collection('users1')
  //let user = { name: 'Tom', age: 23 }
  /* collection.insertOne(user, function(err, results) {
    console.log(results.ops)
    client.close()
  })*/
  if (err) return console.log(err)

  collection.findOneAndUpdate({ age: 21 }, { $set: { age: 25 } }, function(
    err,
    result
  ) {
    console.log(result)
    client.close()
  })
})
