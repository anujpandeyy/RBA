import type { NextApiRequest, NextApiResponse } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
  email: string;
  role: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;


    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }


    res.status(200).json({ message: 'Protected data for admins' });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
