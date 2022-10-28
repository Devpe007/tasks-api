import db from '../../../../database';

class DeleteCategoryService {
  async execute(id) {
    const deleteCategory = await db.query(`
      DELETE FROM categories
      WHERE id = $1
    `, [id]);

    return deleteCategory;
  };
};

export default DeleteCategoryService;
