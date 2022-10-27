import * as Yup from 'yup';

import CreateCategoryService from '../Services/CreateCategoryService';

class CreateCategoryController {
  async handle(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new Error('Fill in the fields correctly');
    };

    const { name } = request.body;

    const createCategoryService = new CreateCategoryService();

    const create = await createCategoryService.execute(name);

    return response.status(201).json(create);
  };
};

export default CreateCategoryController;
