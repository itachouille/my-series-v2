import "server-only";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function getAllMovies() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const moviesData = await prisma.movie.findMany();

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
