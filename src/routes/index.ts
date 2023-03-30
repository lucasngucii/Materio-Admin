import { Router } from 'express';
const routes = Router();
const userRouter = require('./user/index');

routes.use('/api/users', userRouter);

module.exports = routes;
