const router = require('express').Router();
const { User, Thought } = require('../models');
//const User = require('../models/User');

//get all Users
router.get('/', (req, res) => {
    //what are the braces in the find for?
    // why is the first dbUserData in parantheses?

    User.find() // find all Users
    .then((dbUserData) => res.json(dbUserData));
});

//get one User by id
router.get('/:id', (req, res) => {
    User.findOne({ _id: req.params.id })
    .then((dbUserData) => res.json(dbUserData));
});

//create User
router.post('/', (req, res) => {
    User.create(req.body)
    .then((dbUserData) => res.json(dbUserData));
});

//update User by id
router.put('/:id', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id}, req.body)
    .then((dbUserData) => res.json(dbUserData));
});

//delete User
router.delete('/:id', (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
    .then((dbUserData) => res.json(dbUserData));
});

//add friend
router.post('/:UserId/friends/:friendId', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id}, 
        { $addToSet:  { friends: req.params.friendId }},)
    .then((dbUserData) => res.json(dbUserData));
});

//remove friend
router.delete('/:UserId/friends/:friendId', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id},
        { $pull: { friends: req.params.friendId }},)
    .then((dbUserData) => res.json(dbUserData));
});

    
module.exports = router;