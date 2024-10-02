import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.id || !user.email) {
      return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
    }

    let existingUser = await prisma.user.findFirst({
      where: { id: user.id },
    });

    if (!existingUser) {
      existingUser = await prisma.user.create({
        data: {
          id: user.id,
          email: user.email,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          profileImage:
            user.picture ?? `https://avatars.vercel.sh/${user.given_name}`,
        },
      });
    }

    return NextResponse.redirect("http://my-series-v2.vercel.app/dashboard");
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
