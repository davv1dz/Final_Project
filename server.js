const express = require('express')
const path = require('path')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//front end working 
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.edjpfsc.mongodb.net/?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const soccerSchema = new mongoose.Schema({
  title: String,
  Position: String,
  Player: String
});

const soccerModel = mongoose.model('Soccers', soccerSchema);

app.post('/api/soccers',(req,res)=>{
  console.log(req.body);

  soccerModel.create({
    title: req.body.title,
    Position:req.body.Position,
    Player:req.body.Player
  })
  
  res.send('Data Recieved');
})

app.get('/api/soccers', (req, res) => {
  soccerModel.find((error, data)=>{
    res.json(data);
  })
})

app.get('/api/soccer/:id', (req, res)=>{
  console.log(req.params.id);
  soccerModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  })
})

app.put('/api/soccer/:id', (req, res)=>{
  console.log("Update: "+req.params.id);

  soccerModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,data)=>{
      res.send(data);
    })
})

app.delete('/api/soccer/:id', (req, res)=>{
  console.log("Deleteing: "+req.params.id);

  soccerModel.deleteOne({_id:req.params.id}, (error,data)=>{
    res.send(data);
  })
})


// now returns the react single page application (front-end)
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
  });

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})