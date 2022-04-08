const router = require('express').Router();
const { Article } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all articles for homepage
router.get('/', async (req, res) => {
  try {
    const dbArticleData = await Article.findAll({
    });

    const articles = dbArticleData.map((article) =>
      article.get({ plain: true })
    );

    res.render('homepage', {
      articles,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one article
// Use the custom middleware before allowing the user to access the article
router.get('/article/:id', withAuth, async (req, res) => {
  try {
    const dbarticleData = await article.findByPk(req.params.id, {
    });

    const article = dbarticleData.get({ plain: true });
    res.render('article', { article, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
