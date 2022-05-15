const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thoughts')


const usersSchema = new Schema({
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
    friends:[this], // Figure out how to reference friends


  },
  {
    toJSON: {
      virtuals:true,
    },
  }
);

usersSchema
  .virtual('friendCount')
  // getter
  .get(function(){
    return this.friend.length
  })
  
const Users = model('users', usersSchema);

module.exports = Users;