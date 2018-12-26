import express from 'express';
import { routerMap } from '../core/utils';
import { SettingController } from './controller';

const routes = express.Router();

routes.get('/setting',
    routerMap(SettingController.landing)
);

export default routes;