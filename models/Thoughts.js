const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    // thoughtId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions:[reactionSchema],
  },

  {
    toJSON: {
      virtuals:true,
      getters: true,
    },
  }
);

reactionCount
  .virtual('reactions')
  .get(function(){
    return this.reaction.length
  })

module.exports = thoughtSchema;
