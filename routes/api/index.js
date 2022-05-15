const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const userRoutes = require('./userRoutes');

router.use('/courses', courseRoutes);
router.use('/user', userRoutes);

module.exports = router;