import CreateTaskService from '../Services/CreateTaskService';

class CreateTaskController {
  async handle(request, response) {
    const { name, description, category_id } = request.body;

    const createTaskService = new CreateTaskService();

    let image;

    // eslint-disable-next-line no-unused-vars
    if (!request.file) {
      image = null;
    };

    const task = await createTaskService.execute({
      name,
      image,
      description,
      category_id,
    });

    return response.status(201).json(task);
  };
};

export default CreateTaskController;
