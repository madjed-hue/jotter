import { getServerSession } from "next-auth/next";

import { GET } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prismadb";

export async function getSession() {
  return await getServerSession(GET);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma?.user.findUnique({
      where: { email: session.user.email as string },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
