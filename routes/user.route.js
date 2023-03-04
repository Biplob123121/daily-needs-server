const express = require('express');
const router = express.Router();

const { getAllUser, createUser, updateUser, getAdmin } = require('../controllers/user.controller');


router.get('/', getAllUser)
router.get('/admin/:email', getAdmin)
router.post('/', createUser)
router.patch('/:id', updateUser)


module.exports = router;