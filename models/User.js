const { Schema, model } = require('mongoose');
const Thought = require('./Thoughts');

// This Schema is done and tested

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
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends:[this], // Figure out how to reference friends THIS will work
  },
  {
    toJSON: {
      virtuals:true,
    },
  }
);

userSchema
  .virtual('friendCount')
  // getter
  .get(function(){
    return this.friends.length
  })
  

// initialize Users model
const User = model('user', userSchema);

module.exports = User;