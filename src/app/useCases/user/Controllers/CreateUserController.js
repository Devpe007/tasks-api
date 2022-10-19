import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async handle(request, response) {
    const {
      name, email, phone, password,
    } = request.body;

    if (!name || !email || !password) {
      throw new Error('Fill in the fields correctly');
    };

    let phoneVerified;

    if (!phone) {
      phoneVerified = null;
    } else {
      phoneVerified = phone;
    };

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      phone: phoneVerified,
      password,
    });

    return response.status(201).json(user);
  };
};

export default CreateUserController;
