const router = require("express").Router();

const { getAllUsers, getSingleUser,createUser, deleteUser, updateUser, addFriend, deleteFriend } = require("../../controllers/userController");

// get all users route and post new user WORKING
router.route("/").get(getAllUsers).post(createUser);
// get single user and delete single user WORKING
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);
// add a new friend to users list and delete friend from a users friends list
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;
