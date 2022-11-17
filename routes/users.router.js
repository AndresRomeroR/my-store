//router especifico para los usuarios

const express = require('express');
const UsersService = require('../services/user.service');

const router = express.Router();
const service = new UsersService();

router.get('/', (req,res) => {
  const users = service.find();
  res.json(users);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
    id
  });
})

module.exports = router;
