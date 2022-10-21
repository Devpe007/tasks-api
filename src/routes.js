import { Router } from 'express';

import CreateUserController from './app/useCases/user/Controllers/CreateUserController';
import AuthUserController from './app/useCases/user/Controllers/AuthUserController';

const router = Router();

router.post('/register', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);

export { router };
