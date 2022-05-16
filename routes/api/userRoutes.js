const router = require("express").Router();

const { getAllUsers, getSingleUser,createUser, deleteUser } = require("../../controllers/userController");
// const {
//     getStudents,
//     getSingleStudent,
//     createStudent,
//     deleteStudent,
//     addAssignment,
//     removeAssignment,
//   } = require('../../controllers/studentController');





// get all users route and post new user
router.route("/").get(getAllUsers).post(createUser);
// get single user and delete single user
router.route('/:userId').get(getSingleUser).delete(deleteUser);

module.exports = router;
