"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function getUserMovies() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const moviesData = await prisma.movie.findMany({
    where: {
      userId: user.id,
    },
  });

  return moviesData;
}

export async function getMovieById(id: string) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const movieData = await prisma.movie.findUnique({
    where: {
      id,
    },
  });
  return movieData;
}

export async function deleteMovie(id: string) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  await prisma.movie.delete({
    where: {
      id,
    },
  });
}
