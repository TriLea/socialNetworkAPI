const users = require('../models/User.js');
const thoughts = require('../models/Thought.js');
const connection = require('../config/connection.js');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    //clears the database
    //await users.deleteMany({});
    //await thoughts.deleteMany({});

    users.push({
        username: 'johndoe',
        email: 'email1@gmail.com',
    });

    users.push({
        username: 'janedoe2',
        email: 'email2@gmail.com',
    });

});

// thoughts.push({
//     thoughtText: 'This is a thought',
//     username: 'johndoe',
