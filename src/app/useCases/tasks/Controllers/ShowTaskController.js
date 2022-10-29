import ShowTaskService from '../Services/ShowTaskService';

class ShowTaskController {
  async handle(request, response) {
    const showTaskService = new ShowTaskService();

    const showAll = await showTaskService.execute();

    return response.status(200).json(showAll);
  };
};

export default ShowTaskController;
