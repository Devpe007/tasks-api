import * as Yup from 'yup';

import UpdateCategoryService from '../Services/UpdateCategoryService';

class UpdateCategoryController {
  async handle(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new Error('Fill in the fields correctly');
    };

    const { id } = request.params;
    const { name } = request.body;

    const updateCategoryService = new UpdateCategoryService();

    const update = await updateCategoryService.execute({
      id,
      name,
    });

    return response.status(200).json(update);
  };
};

export default UpdateCategoryController;
