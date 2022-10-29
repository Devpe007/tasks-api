import db from '../../../../database';

class ShowTaskService {
  async execute() {
    const rows = await db.query(`
      SELECT tasks.*
      FROM tasks
    `);

    return rows;
  };
};

export default ShowTaskService;
