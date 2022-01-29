const { Router } = require('express');
const heroRouter = require('./Routers/heroRouter');
const router = Router();
router.use('/hero', heroRouter);
module.exports = router;