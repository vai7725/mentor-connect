'use server';
import { client } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export const onSaveWhoData = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403, data: 'User not authenticated' };
    }

    const userExist = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
    });

    if (!userExist) {
      return { status: 200, data: userExist };
    }

    // save setup page 1 data to db
    return { status: 400 };
  } catch (error) {
    console.log(error);
    return { status: 500, data: 'Internal server error' };
  }
};
