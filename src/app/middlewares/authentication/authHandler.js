import { verify } from 'jsonwebtoken';

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token não existe' });
  };

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, String(process.env.JWT_SECRET));

    request.userId = decoded.sub;

    return next();
  } catch {
    return response.status(401).json({ error: 'Token invalido' });
  };
};
