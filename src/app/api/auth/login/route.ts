import { NextResponse } from 'next/server';
import User from '../../../../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    }

    const token = jwt.sign(
      { email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    return NextResponse.json({ token, user: { email: user.email, role: user.role } });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}
