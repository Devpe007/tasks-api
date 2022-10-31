import db from '../../../../database';

class UpdateTaskService {
  async execute({
    id,
    name,
    image,
    description,
    category_id,
  }) {
    const [task] = await db.query(`
      SELECT * FROM tasks WHERE id = $1
    `, [id]);

    if (!task) {
      throw new Error('This category does not exists!');
    };

    const [row] = await db.query(`
      UPDATE tasks
      SET name = $1, image = $2, description = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, image, description, category_id, id]);

    return row;
  };
};

export default UpdateTaskService;
