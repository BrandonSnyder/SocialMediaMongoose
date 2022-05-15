const { ObjectId } = require("mongoose").Types;
const { Users, Thoughts, Friends } = require("../models");

const headCount = async () =>
    Users.aggregate()
    .count("usersCount")
    .then((usersCount) => numberOfUsers);
    