import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import db from '../../../../database';

class AuthUserService {
  async execute({
    email,
    password,
  }) {
    const [user] = await db.query(`
      SELECT * FROM users WHERE email = $1
    `, [email]);

    if (!user) {
      throw new Error('Email/password incorrect!');
    };

    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new Error('Email/password incorrect!');
    };

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      String(process.env.JWT_SECRET),
      {
        subject: user.id,
        expiresIn: '14d',
      },
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  };
};

export default AuthUserService;
