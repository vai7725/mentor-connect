'use server';
import { client } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { USER_ROLE } from '@prisma/client';

export const onSaveWhoData = async (who: string) => {
  try {
    console.log(who);
    if (!who || who == '') {
      return { status: 400, data: 'Invalid or missing role' };
    }

    const user = await currentUser();
    if (!user) {
      return { status: 403, data: 'User not authenticated' };
    }

    const data = await client.user.update({
      where: { clerkid: user.id },
      data: {
        role: who as USER_ROLE,
      },
    });

    console.log(data);

    return {
      status: 200,
      data: 'Role updated successfully',
    };
  } catch (error) {
    console.log(error);
    return { status: 500, data: 'Internal server error' };
  }
};
