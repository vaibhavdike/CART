const express = require('express')
const app = express()
const cors=require('cors');
const helmet=require('helmet');
const mongoose=require('mongoose');

const port = 8000

app.use(cors());
app.use(helmet());
app.use(express.json());

const connneToMongo=()=>{
    try{
        mongoose.connect("mongodb://0.0.0.0:27017/cartpro");
        console.log("connect to mongo successfully");
    }catch(err){
     console.log(err);
    }
}
connneToMongo();


// Calling Schema class 
const Schema = mongoose.Schema; 
const collection_structure = new Schema({ 
    username: { 
      type: String, 
      require: true
    } ,
    password:{
        type: String
    }
     
  }) 
    
  // Creating collection 
  const users = mongoose.model("users", collection_structure) ;



//   collections.create({ 
//     username: "aayush", 
//     password: 10 
//   }).then((ans) => { 
//     console.log("Document inserted") 
//   }).catch((err) => { 
//     console.log(err.Message); 
//   })


app.get('/user', async(req, res) => {
    console.log("hello");
    const user=users.findOne({username:req.body.username});
    try{
          if(!user){
           res.send("enter the valid username");
          }else{
          res.send(okk).status(500);
          res.json(user);
          }
    }catch(err){
         res.send(err);
    }
   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
