const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      // .virtuals:true,
      getters: true,
    },
  }
);

reactionSchema
  .get(function(){
      return this.createdAt
  })
  // .set(function(){
  //       this.set('This is just a test in reaction.js need to change text still')
  // })
  const Reactions = model('reactions', reactionSchema)

  module.exports = Reactions