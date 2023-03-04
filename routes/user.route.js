const express = require('express');
const router = express.Router();

const { getAllUser, createUser, updateUser } = require('../controllers/user.controller');


router.get('/', getAllUser)
router.post('/', createUser)
router.patch('/:id', updateUser)


module.exports = router;