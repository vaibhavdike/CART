const express = require('express')
const app = express()
const cors=require('cors');
const helmet=require('helmet');
const mongoose=require('mongoose');
const User =require('./model/User');

const port = 8000;
const mongoAtlasUri ="mongodb+srv://vaibhavdike:0000000000@cluster0.izpm89j.mongodb.net/?retryWrites=true&w=majority";
// const mongoAtlasUri ="mongodb://localhost:27017/cart";


app.use(cors());
app.use(helmet());
app.use(express.json());

const connneToMongo=()=>{
 
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );} catch (e) {
  console.log("could not connect");
}
}
connneToMongo();
mongoose.set('strictQuery', true);

//register user

app.post("/register",async(req,res)=>{
    const user=new User({
      username:req.body.username,
      password:req.body.password
    });
     try{
        const saveuser=await user.save();
        res.status(200).send(saveuser);
     }catch(err){
        res.status(500).send(err);
     }
});
//find user
app.get('/user', async (req, res) => {
  try {
    const  username  = req.body.username; // Get the username from the query parameters
    const user = await User.findOne({ username }); // Find the user by username
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
