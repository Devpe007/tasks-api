import db from '../../../../database';

class ShowCategoryService {
  async execute() {
    const rows = await db.query(`
      SELECT categories.*
      FROM categories
    `);

    return rows;
  };
};

export default ShowCategoryService;
