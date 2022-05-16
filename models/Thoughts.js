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
    reactions:[ {
      type: Schema.Types.ObjectId,
      ref: 'reactionSchema'}
    ],
  },

  {
    toJSON: {
      virtuals:true,
      getters: true,
    },
  }
);






// reactionsCount
//   .virtual('reactions')
//   .get(function(){
//     return this.reactions.length
//   })

module.exports = thoughtSchema;
