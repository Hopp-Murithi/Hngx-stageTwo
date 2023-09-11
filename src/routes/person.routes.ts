import { Router } from 'express';
import { PersonController } from '../controllers/person';

const user = Router();
const personController = new PersonController();

user.post('/', personController.createPerson);
user.get('/', personController.getAllPeople);
user.get('/:id', personController.getPersonById);
user.get('/name', personController.getPeopleByName);
user.put('/:id', personController.updatePerson);
user.delete('/:id', personController.deletePerson);

export default user;