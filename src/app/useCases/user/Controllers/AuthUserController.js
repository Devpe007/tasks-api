import AuthUserService from '../services/AuthUserService';

class AuthUserController {
  async handle(request, response) {
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
