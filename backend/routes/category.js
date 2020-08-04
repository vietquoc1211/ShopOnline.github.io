const express = require('express');
const router = express.Router();
const categoryService = require('../service/category.js');
const cors = require('cors');
const authorize = require('../helpers/authorize');
const corsOptionsDelegate = require('../helpers/cors');

router.all('*', cors(corsOptionsDelegate));

// routes
router.get('/getAll', categoryService.getAll);
router.post('/add-or-update', authorize(), add);

module.exports = router;
