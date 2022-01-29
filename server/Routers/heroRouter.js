const { Router } = require('express');
const { heroController } = require('../controllers');
const heroRouter = Router();


heroRouter.route('/').post(heroController.create);

heroRouter.get('/:pageId', heroController.parseAllHeroes);


module.exports = heroRouter;