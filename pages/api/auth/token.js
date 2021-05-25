import { getToken } from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;

export default async (req, res) => {
  const token = await getToken({
    req,
    secret
  });
  const { idToken, exp, sub, iat } = token;

  res.status(200).json({ idToken, exp, sub, iat, token_type: 'Bearer' });
};
