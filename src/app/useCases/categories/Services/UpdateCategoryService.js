import db from '../../../../database';

class UpdateCategoryService {
  async execute({
    id,
    name,
  }) {
    const [category] = await db.query(`
      SELECT * FROM categories WHERE id = $1
    `, [id]);

    if (!category) {
      throw new Error('This category does not exists!');
    };

    const [updatedCategory] = await db.query(`
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *
    `, [name, id]);

    return updatedCategory;
  };
};

export default UpdateCategoryService;
