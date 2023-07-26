const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;

/*
TODOS:
    build addFriend & deleteFriend in userController.js
    build createReaction & deleteReaction in thoughtController.js
*/