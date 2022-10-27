import db from '../../../../database';

class CreateCategoryService {
  async execute(name) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  };
};

export default CreateCategoryService;
