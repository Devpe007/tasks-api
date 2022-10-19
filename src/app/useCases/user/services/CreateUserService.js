import db from '../../../../database';

class CreateUserService {
  async execute({
    name, email, phone, password,
  }) {
    const [row] = await db.query(`
      INSERT INTO users(name, email, phone, password)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, password]);

    return row;
  };
};

export default CreateUserService;
