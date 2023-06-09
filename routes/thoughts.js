const router = require('express').Router();
//const { User, Thought } = require('../models');
const thoughts = require('../models/Thought.js');

//get all thoughts
router.get('/', (req, res) => {

    thoughts.find({}) // find all users
    .then((dbUserData) => res.json(dbUserData));
});

//get one thought by id
router.get('/:id', (req, res) => {
    thoughts.findOne({ _id: req.params.id })
    .then((dbUserData) => res.json(dbUserData));
});

//create thought
router.post('/', (req, res) => {
    thoughts.create(req.body)
    .then((dbUserData) => res.json(dbUserData));
});

//update thought by id
router.put('/:id', (req, res) => {
    thoughts.findOneAndUpdate({ _id: req.params.id}, req.body)
    .then((dbUserData) => res.json(dbUserData));
});

//delete thought
router.delete('/:id', (req, res) => {
    thoughts.findOneAndDelete({ _id: req.params.id })
    .then((dbUserData) => res.json(dbUserData));
});

module.exports = router;