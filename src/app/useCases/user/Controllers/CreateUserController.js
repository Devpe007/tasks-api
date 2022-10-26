import * as Yup from 'yup';

import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async handle(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      phone: Yup.string(),
      password: Yup.string().required().min(6),
    });

    const {
      name, email, phone, password,
    } = request.body;

    if (!(await schema.isValid(request.body))) {
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

    return response.status(201).json({
      id: user.id,
      name,
      email,
      phone,
    });
  };
};

export default CreateUserController;
