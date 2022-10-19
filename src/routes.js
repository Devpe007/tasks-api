import { Router } from 'express';

import CreateUserController from './app/useCases/user/Controllers/CreateUserController';

const router = Router();

router.post('/register', new CreateUserController().handle);

export { router };
