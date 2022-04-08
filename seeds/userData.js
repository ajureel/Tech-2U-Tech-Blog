const { User } = require('../models');

const userdata = [
  {
    username: 'M. Tester',
    email: 'm_tester@test.test',
    password: 'ILoveToTest'
  },
  {
    username: 'Dance Dance',
    email: 'dance_dance@test.test',
    password: 'ILoveToDance'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
