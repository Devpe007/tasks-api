import { Router } from 'express';

import authHandler from './app/middlewares/authentication/authHandler';

import CreateUserController from './app/useCases/user/Controllers/CreateUserController';
import AuthUserController from './app/useCases/user/Controllers/AuthUserController';
import DetailUserController from './app/useCases/user/Controllers/DetailUserController';

import CreateCategoryController from './app/useCases/categories/Controllers/CreateCategoryController';
import UpdateCategoryController from './app/useCases/categories/Controllers/UpdateCategoryController';
import ShowCategoryController from './app/useCases/categories/Controllers/ShowCategoryController';

const router = Router();

router.post('/register', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);

router.get('/me', authHandler, new DetailUserController().handle);

router.post('/category', authHandler, new CreateCategoryController().handle);
router.put('/category/:id', authHandler, new UpdateCategoryController().handle);
router.get('/categories', authHandler, new ShowCategoryController().handle);

export { router };
