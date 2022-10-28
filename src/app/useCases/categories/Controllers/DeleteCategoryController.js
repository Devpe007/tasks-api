import DeleteCategoryService from '../Services/DeleteCategoryService';

class DeleteCategoryController {
  async handle(request, response) {
    const { id } = request.params;

    const deleteCategoryService = new DeleteCategoryService();

    await deleteCategoryService.execute(id);

    return response.sendStatus(204);
  };
};

export default DeleteCategoryController;
