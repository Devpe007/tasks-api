import db from '../../../../database';

class DetailUserService {
  async execute(userId) {
    const [user] = await db.query(`
      SELECT * FROM users WHERE id = $1
    `, [userId]);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  };
};

export default DetailUserService;
