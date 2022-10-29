import db from '../../../../database';

class CreateTaskService {
  async execute({
    name,
    image,
    description,
    category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO tasks(name, image, description, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, image, description, category_id]);

    return row;
  };
};

export default CreateTaskService;
