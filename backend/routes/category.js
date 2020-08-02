const express = require('express');
const router = express.Router();
const { GetCategories } = require('../controller/category-controller');


//get all departments
router.get('/getCategories', GetCategories);

module.exports = router;

