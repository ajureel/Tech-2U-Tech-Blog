const { Article } = require('../models');

const articledata = [
  {
    title: 'Blossoming Apricot',
    body: 'Branches with pink apricot blossoms against a blue background.',
    user_id: '1'
  },
  {
    title: 'Cosmos Flowers',
    body: 'Pink cosmos flowers against a blue sky..',
    user_id: '2'
  },
  {
    title: 'Sand + Sea = Summer',
    body: 'Sandy beach with the blue sea and sky in the background.',
    user_id: '2'
  }
];

const seedArticles = () => Article.bulkCreate(articledata);

module.exports = seedArticles;
