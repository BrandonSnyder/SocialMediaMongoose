const router = require('express').Router();

const { getAllThoughts, createThought, getSingleThought, updateThought,deleteThought} = require('../../controllers/thoughtsController.js');


// get all thoughts 
router.route("/").get(getAllThoughts).post(createThought);

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);



module.exports = router;