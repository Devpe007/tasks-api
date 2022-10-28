import ShowCategoryService from '../Services/ShowCategoryService';

class ShowCategoryController {
  async handle(request, response) {
    const showCategoryService = new ShowCategoryService();

    const showAll = await showCategoryService.execute();

    return response.status(200).json(showAll);
  };
};

export default ShowCategoryController;
