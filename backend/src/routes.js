import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import OrderController from './app/controllers/OrderController';
import WithdrawController from './app/controllers/WithdrawController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';
import DeliveryWithProblemsController from './app/controllers/DeliveryWithProblemsController';
import ProblemsController from './app/controllers/ProblemsController';

import authMiddleware from './app/middlewares/auth';

const upload = multer(multerConfig);

const routes = new Router();

// routes.post('/users', UserController.store);
// routes.put('/users', UserController.update);
routes.post('/sessions', SessionController.store);

routes.get('/deliveryman', DeliverymanController.index);
routes.get('/deliveryman/:id', DeliverymanController.show);

routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);

routes.get('/delivery/problems', DeliveryWithProblemsController.index);
routes.get('/delivery', DeliveryController.index);
routes.get('/delivery/:id', DeliveryController.show);

routes.get('/deliveryman/:deliverymanId/deliveries', OrderController.index);

routes.get('/problems', ProblemsController.index);

routes.get('/delivery/:deliveryId/problems', DeliveryProblemsController.index);
routes.post('/delivery/:deliveryId/problems', DeliveryProblemsController.store);

routes.post('/withdraw/:deliveryId/:deliverymanId', WithdrawController.store);
routes.put('/withdraw/:deliveryId/:deliverymanId', WithdrawController.update);

routes.get('/files/:id', FileController.show);
routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.post('/delivery', DeliveryController.store);
routes.put('/delivery/:id', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.delete);
routes.delete('/problem/:id/cancel-delivery', DeliveryController.delete);

export default routes;
