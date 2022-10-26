import * as Yup from 'yup';

import AuthUserService from '../services/AuthUserService';

class AuthUserController {
  async handle(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().min(6),
    });

    if (!(await schema.isValid(request.body))) {
      throw new Error('Fill in the fields correctly');
    };

    const { email, password } = request.body;

    const authUserService = new AuthUserService();

    const user = await authUserService.execute({
      email,
      password,
    });

    return response.status(200).json(user);
  };
};

export default AuthUserController;
