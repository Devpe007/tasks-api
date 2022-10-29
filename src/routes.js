import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/multer';

import authHandler from './app/middlewares/authentication/authHandler';

import CreateUserController from './app/useCases/user/Controllers/CreateUserController';
import AuthUserController from './app/useCases/user/Controllers/AuthUserController';
import DetailUserController from './app/useCases/user/Controllers/DetailUserController';

import CreateCategoryController from './app/useCases/categories/Controllers/CreateCategoryController';
import UpdateCategoryController from './app/useCases/categories/Controllers/UpdateCategoryController';
import ShowCategoryController from './app/useCases/categories/Controllers/ShowCategoryController';
import DeleteCategoryController from './app/useCases/categories/Controllers/DeleteCategoryController';

import CreateTaskController from './app/useCases/tasks/Controllers/CreateTaskController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

router.post('/register', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);

router.get('/me', authHandler, new DetailUserController().handle);

router.post('/category', authHandler, new CreateCategoryController().handle);
router.put('/category/:id', authHandler, new UpdateCategoryController().handle);
router.delete('/category/:id', authHandler, new DeleteCategoryController().handle);
router.get('/categories', authHandler, new ShowCategoryController().handle);

router.post('/task', authHandler, upload.single('file'), new CreateTaskController().handle);

export { router };
