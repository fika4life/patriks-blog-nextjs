import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Server error' }, { status: 500 })
    );
  }
};
