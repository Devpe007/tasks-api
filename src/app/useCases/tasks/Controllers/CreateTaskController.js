import CreateTaskService from '../Services/CreateTaskService';

class CreateTaskController {
  async handle(request, response) {
    const { name, description, category_id } = request.body;

    const createTaskService = new CreateTaskService();

    // eslint-disable-next-line no-unused-vars
    const image = request.file?.filename;

    const task = await createTaskService.execute({
      name,
      image: image || null,
      description,
      category_id,
    });

    return response.status(201).json(task);
  };
};

export default CreateTaskController;
