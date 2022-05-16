const { User, Thoughts, Friends } = require("../models");

// get all users
// const headCount = async () =>
//   Users.aggregate()
//     .count('usersCount')
//     .then((numberOfUsers) => numberOfUsers);

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  createUser(req,res){
    User.create(req.body)
    .then((student) => res.json(student))
    .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  deleteUser(res,req){
    User.findOneAndRemove({ _id: req.params.studentId })
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No such user exists' })
        : Course.findOneAndUpdate(
            { user: req.params.userId },
            { $pull: { students: req.params.userId } },
            { new: true }
          )
    )
    .then((course) =>
      !course
        ? res.status(404).json({
            message: 'user deleted, but no courses found',
          })
        : res.json({ message: 'Student successfully deleted' })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

  }
};

// headCount = async () =>
//     Users.aggregate()
//     .count("usersCount")
//     .then((usersCount) => numberOfUsers);
