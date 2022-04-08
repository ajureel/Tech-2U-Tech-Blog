const sequelize = require('../config/connection');
const seedArticles = require('./articleData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedArticles();

  process.exit(0);
};

seedAll();
