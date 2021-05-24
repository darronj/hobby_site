import { getToken } from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;

export default async (req, res) => {
  const token = await getToken({
    req,
    secret
  });

  res.status(200).json(token);
};
