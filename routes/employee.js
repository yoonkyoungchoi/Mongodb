const express = require('express');
const router = express.Router();

const EmployeeController =require('../controllers/EmployeeControllers');

router.get('/all', EmployeeController.index);
router.get('/', EmployeeController.show);
router.post('/', EmployeeController.store);
router.put('/', EmployeeController.update);
router.delete('/', EmployeeController.destroy);


module.exports = router;
