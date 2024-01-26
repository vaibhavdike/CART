const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true // Ensure usernames are unique
    },
   password: {
      type: String
    
    }
    
  });
  
  // Create the User model
  const User = mongoose.model('User', userSchema);
  
  // Export the model
  module.exports = User;