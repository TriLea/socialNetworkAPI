const router = require('express').Router();
const thoughts = require('../../models/Thought');

//get all users
router.get('/', (req, res) => {

    thoughts.find({}) // find all users
    .then((dbUserData) => res.json(dbUserData));
});

//get one user by id
router.get('/:id', (req, res) => {
    thoughts.findOne({ _id: req.params.id })
    .then((dbUserData) => res.json(dbUserData));
});

//create user
router.post('/', (req, res) => {
    thoughts.create(req.body)
    .then((dbUserData) => res.json(dbUserData));
});

//update user by id
router.put('/:id', (req, res) => {
    thoughts.findOneAndUpdate({ _id: req.params.id}, req.body)
    .then((dbUserData) => res.json(dbUserData));
});

//delete user
router.delete('/:id', (req, res) => {
    thoughts.findOneAndDelete({ _id: req.params.id })
    .then((dbUserData) => res.json(dbUserData));
});