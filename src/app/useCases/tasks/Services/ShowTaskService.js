import db from '../../../../database';

class ShowTaskService {
  async execute() {
    const rows = await db.query(`
      SELECT tasks.*, categories.name AS category_name
      FROM tasks
      LEFT JOIN categories ON categories.id = tasks.category_id
    `);

    return rows;
  };
};

export default ShowTaskService;
