const express = require('express');

const controller = require('../controllers/controller');

const route = require('express').Router();

route.get('/allPersonagens', controller.findAllPersonController);

route.get('/personagens/:id', controller.findByIdPersonController);

route.post('/createPersonagem', controller.createPerson);

route.put('/updatePersonagem/:id',
controller.updatePerson);

route.delete('/deletePersonagem/:id',
controller.deletePerson);

module.exports = route;
