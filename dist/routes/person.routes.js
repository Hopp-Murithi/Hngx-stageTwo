"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const person_1 = require("../controllers/person");
const user = (0, express_1.Router)();
const personController = new person_1.PersonController();
user.post('/', personController.createPerson);
user.get('/', personController.getAllPeople);
user.get('/:id', personController.getPersonById);
user.get('/name', personController.getPeopleByName);
user.put('/:id', personController.updatePerson);
user.delete('/:id', personController.deletePerson);
exports.default = user;
//# sourceMappingURL=person.routes.js.map