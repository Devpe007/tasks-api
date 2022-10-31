import db from '../../../../database';

class DeleteTaskService {
  async execute(id) {
    const deleteCategory = await db.query(`
      DELETE FROM tasks
      WHERE id = $1
    `, [id]);

    return deleteCategory;
  };
};

export default DeleteTaskService;
