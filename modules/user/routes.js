import express from 'express';
import { routerMap } from '../core/utils';
import { UserController } from './controller';

const routes = express.Router();

routes.get('/user',
    routerMap(UserController.landing)
);

export default routes;