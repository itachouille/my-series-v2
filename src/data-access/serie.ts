"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function getUserSeries() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const seriesData = await prisma.serie.findMany({
    where: {
      userId: user.id,
    },
  });

  return seriesData;
}

export async function addSerie(name: string, backdrop_path: string) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const existingUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!existingUser) return;

  await prisma.serie.create({
    data: {
      name,
      backdrop_path,
      saison: 1,
      episode: 1,
      userId: existingUser.id,
    },
  });
  redirect("/dashboard");
}

export async function getSerieById(id: string) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const serieData = await prisma.serie.findUnique({
    where: {
      id,
    },
  });
  return serieData;
}

export async function updateSerie(id: string, saison: number, episode: number) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  await prisma.serie.update({
    where: {
      id,
    },
    data: {
      saison,
      episode,
    },
  });
}

export async function deleteSerie(id: string) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  await prisma.serie.delete({
    where: {
      id,
    },
  });
}
