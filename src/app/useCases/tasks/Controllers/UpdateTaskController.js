import UpdateTaskService from '../Services/UpdateTaskService';

class UpdateTaskController {
  async handle(request, response) {
    const { id } = request.params;
    const { name, description, category_id } = request.body;

    const updateTaskService = new UpdateTaskService();

    const image = request.file?.filename;

    const updatedTask = await updateTaskService.execute({
      id,
      name,
      image: image || null,
      description,
      category_id,
    });

    return response.status(200).json(updatedTask);
  };
};

export default UpdateTaskController;
