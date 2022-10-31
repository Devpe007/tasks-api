import DeleteTaskService from '../Services/DeleteTaskService';

class DeleteTaskController {
  async handle(request, response) {
    const { id } = request.params;

    const deleteTaskService = new DeleteTaskService();

    await deleteTaskService.execute(id);

    return response.sendStatus(200);
  };
};

export default DeleteTaskController;
