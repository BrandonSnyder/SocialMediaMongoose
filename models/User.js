const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thoughts');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [thoughtSchema],
    // friends:[this], // Figure out how to reference friends
  },
  {
    toJSON: {
      virtuals:true,
    },
    id:false
  }
);

// usersSchema
//   .virtual('friendCount')
//   // getter
//   .get(function(){
//     return this.friend.length
//   })
  

// initialize Users model
const User = model('user', userSchema);

// creating new user

// User.create({username: 'wizzz009', email: 'wizzz008@gmail.com'},(err, data)=>{
//   if(err){
//     console.log(err);
//   }console.log(data);
//   }
// )




module.exports = User;