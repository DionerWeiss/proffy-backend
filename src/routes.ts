import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController;
const connectionController = new ConnectionController;


routes.get('/', (request, response) => {
    return response.json({ "msg": "bem-vindo" })
})
routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);

export default routes;