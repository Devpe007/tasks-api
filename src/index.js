import 'express-async-errors';
import express from 'express';

import errorHandler from './app/middlewares/error/errorHandler';

import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler);

export { app };
