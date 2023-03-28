const users = require('../models/User.js');
const thoughts = require('../models/Thought.js');
const connection = require('../config/connection.js');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    //clears the database
    await users.deleteMany({});
    await thoughts.deleteMany({});

    await users.create({
        username: 'mr.yes',
        email: 'email1@gmail.com',
    });
    console.log('user created');

    await thoughts.create({
        thoughtText: 'This is a thought',
        username: 'mr.yes',
    });
    console.log('thought created');

    connection.close();

});

// thoughts.push({
//     thoughtText: 'This is a thought',
//     username: 'johndoe',

// seedDB().then(() => {
//     mongoose.connection.close();
// });