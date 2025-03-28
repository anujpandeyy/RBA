import { NextResponse } from 'next/server';
import User from '../../../../models/User';
import connectDB from '../../../../lib/connectDB';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password, role = 'user' } = await req.json();

    if (!['user', 'admin'].includes(role)) {
      return NextResponse.json({ message: 'Invalid role' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error during registration:', error.message);
      return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json({ message: 'Something went wrong', error: 'Unknown error' }, { status: 500 });
    }
  }
}
