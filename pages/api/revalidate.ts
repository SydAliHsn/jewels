import { NextApiResponse, NextApiRequest } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== 'alihassan') {
    return res.status(401).json({ message: 'Invalid Token provided.' });
  }

  if (req.query.secret === 'alihassan') {
    await res.revalidate('/');
    await res.revalidate('/shop');
    await res.revalidate('/shop/[]');
  }
};
