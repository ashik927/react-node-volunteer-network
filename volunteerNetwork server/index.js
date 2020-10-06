const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId;


const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://volunteerUser:volunteer123@cluster0.scmea.mongodb.net/volunteerNetwork?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true  });
client.connect(err => {
  const collection = client.db("volunteerNetwork").collection("eventList");
  console.log("hello, i am connect");
  app.post('/addevent',(req,res) => {
    const fakeData = req.body;
    console.log(fakeData);
    collection.insertMany(fakeData)
    .then(result=>{
      res.send(result)
    })
  })
  app.get('/readevent',(req,res) => {
    collection.find({})
    .toArray((err , documents)=>{
      res.send(documents)
    })
    
  })

  app.get('/readevent/:id',(req,res) => {
    collection.find({id: req.params.id})
    .toArray((err , documents)=>{
      res.send(documents[0])
    })
    
  })

  app.post('/addadmin',(req,res) => {
    const adddata = req.body;
    collection.insertOne(adddata)
    .then(result=>{
      res.send(result)

    })
  })

});

client.connect(err => {
  const registerCollection = client.db("volunteerNetwork").collection("eventRegister");
  app.post('/addregister',(req,res) => {
    const registerData = req.body;
    registerCollection.insertOne(registerData)
    .then(result=>{
      res.send(result)

    })
  })
  app.get('/readregisterevent',(req,res) => {
    registerCollection.find({email:req.query.email})
    .toArray((err , documents)=>{
      res.send(documents)
    })
  })
  app.delete('/deleteitem/:id',(req,res) => {
    registerCollection.deleteOne({id: req.params.id})
    .then((result)=>{
      console.log(result);
    })
    
  })
  app.get('/adminreadregisterevent',(req,res) => {
    registerCollection.find({})
    .toArray((err , documents)=>{
      res.send(documents)
    })
  })

  app.delete('/admindeleteitem/:id',(req,res) => {
    registerCollection.deleteOne({id: req.params.id})
    .then((result)=>{
      console.log(result);
      res.redirect('http://localhost:3000/admin')
    })
  })
});


app.listen(port)