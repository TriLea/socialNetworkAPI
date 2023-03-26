const router = require('express').Router();
const user = require('../models/User.js');

//get all users
router.get('/', (req, res) => {
    //what are the braces in the find for?
    // why is the first dbUserData in parantheses?

    user.find({}) // find all users
    .then((dbUserData) => res.json(dbUserData));
});

//get one user by id
router.get('/:id', (req, res) => {
    user.findOne({ _id: req.params.id })
    .then((dbUserData) => res.json(dbUserData));
});

//create user
router.post('/', (req, res) => {
    user.create(req.body)
    .then((dbUserData) => res.json(dbUserData));
});

//update user by id
router.put('/:id', (req, res) => {
    user.findOneAndUpdate({ _id: req.params.id}, req.body)
    .then((dbUserData) => res.json(dbUserData));
});

//delete user
router.delete('/:id', (req, res) => {
    user.findOneAndDelete({ _id: req.params.id })
    .then((dbUserData) => res.json(dbUserData));
});

//add friend
router.post('/:userId/friends/:friendId', (req, res) => {
    user.findOneAndUpdate({ _id: req.params.id}, 
        { $addToSet:  { friends: req.params.friendId }},)
    .then((dbUserData) => res.json(dbUserData));
});

//remove friend
router.delete('/:userId/friends/:friendId', (req, res) => {
    user.findOneAndUpdate({ _id: req.params.id},
        { $pull: { friends: req.params.friendId }},)
    .then((dbUserData) => res.json(dbUserData));
});

    
module.exports = router;