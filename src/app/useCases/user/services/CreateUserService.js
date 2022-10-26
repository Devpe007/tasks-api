import { hash } from 'bcryptjs';

import db from '../../../../database';

class CreateUserService {
  async execute({
    name, email, phone, password,
  }) {
    const [user] = await db.query(`
      SELECT * FROM users WHERE email = $1
    `, [email]);

    if (user) {
      throw new Error('This email is already been used!');
    };

    const passwordHash = await hash(password, 8);

    const [row] = await db.query(`
      INSERT INTO users(name, email, phone, password)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, passwordHash]);

    return row;
  };
};

export default CreateUserService;
