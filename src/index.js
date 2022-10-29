import 'express-async-errors';
import express from 'express';
import path from 'path';

import errorHandler from './app/middlewares/error/errorHandler';

import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(errorHandler);

export { app };
