'use server';
import { client } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export const saveSetupCandidateData01 = async (data: {
  fullName: string;
  phone: string;
}) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403, data: 'User not authenticated' };
    }

    await client.user.update({
      where: { clerkid: user.id },
      data: {
        firstname: data.fullName,
        phone: data.phone,
      },
    });

    return {
      status: 200,
      data: 'Candidate details updated successfully',
    };
  } catch (error) {
    console.log(error);
    return { status: 500, data: 'Internal server error' };
  }
};

export const saveSetupCandidateData02 = async (data: {
  degree: string;
  fieldOfStudy: string;
  graduationYear: string;
}) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403, data: 'User not authenticated' };
    }

    await client.user.update({
      where: { clerkid: user.id },
      data: {
        educationDetails: {
          update: {
            highestDegree: data.degree,
            fieldOfStudy: data.fieldOfStudy,
            graduationYear: data.graduationYear,
          },
        },
      },
    });

    return {
      status: 200,
      data: 'Candidate details updated successfully',
    };
  } catch (error) {
    console.log(error);
    return { status: 500, data: 'Internal server error' };
  }
};

export const saveSetupCandidateData03 = async (data: {
  company: string;
  jobTitle: string;
  workDuration: string;
  responsibilities: string;
}) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403, data: 'User not authenticated' };
    }

    await client.user.update({
      where: { clerkid: user.id },
      data: {
        workExperience: {
          update: {
            company: data.company,
            jobTitle: data.jobTitle,
            workDuration: data.workDuration,
            keyResponsibilities: data.responsibilities,
          },
        },
      },
    });

    return {
      status: 200,
      data: 'Candidate details updated successfully',
    };
  } catch (error) {
    console.log(error);
    return { status: 500, data: 'Internal server error' };
  }
};

export const saveSetupCandidateData04 = async (data: {
  skills: string[];
  experience: string;
}) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403, data: 'User not authenticated' };
    }

    await client.user.update({
      where: { clerkid: user.id },
      data: {
        skills: data.skills,
        yearsOfExperience: data.experience,
      },
    });

    return {
      status: 200,
      data: 'Candidate details updated successfully',
    };
  } catch (error) {
    console.log(error);
    return { status: 500, data: 'Internal server error' };
  }
};
