const express = require('express');
const router = express.Router();

const EmployeeController =require('../controllers/EmployeeControllers');

router.get('/', EmployeeController.index);
router.get('/show', EmployeeController.show);
router.post('/store', EmployeeController.store);

module.exports = router;
