import { Router } from 'express';

import authHandler from './app/middlewares/authentication/authHandler';

import CreateUserController from './app/useCases/user/Controllers/CreateUserController';
import AuthUserController from './app/useCases/user/Controllers/AuthUserController';
import DetailUserController from './app/useCases/user/Controllers/DetailUserController';

import CreateCategoryController from './app/useCases/categories/Controllers/CreateCategoryController';

const router = Router();

router.post('/register', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);

router.get('/me', authHandler, new DetailUserController().handle);

router.post('/category', authHandler, new CreateCategoryController().handle);

export { router };
