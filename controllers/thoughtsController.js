const { User, Thoughts } = require('../models');

// helper functions that aid in CRUD
module.exports = {
    getAllThoughts(req, res) {
        Thoughts.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
      },
      createThought(req, res) {
        Thoughts.create(req.body)
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));//Add to users thoughts

      },
      getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
          .select("-__v")
          .then(async (thought) =>
            !thought
              ? res.status(404).json({ message: "No thought with that ID" })
              : res.json({
                thought,
                })
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
      updateThought(req,res){
        Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      deleteThought(req, res) {
        Thoughts.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought)=>
        !thought
        ?res.status(404).json({message:'No such thought exist'})
        :res.json({ message: 'thought successfully deleted' })
        )          
      },






}