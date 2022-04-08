const { User } = require('../models');

const UserData = [
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

const seedUsers = () => Article.bulkCreate(userdata);

module.exports = seedUsers;
