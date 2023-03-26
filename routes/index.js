const router = require('express').Router();
const thoughtsRoutes = require('./thoughts');
const usersRoutes = require('./users');

router.use('/api/thoughts', thoughtsRoutes);
router.use('/api/users', usersRoutes);

module.exports = router;