import "server-only";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function getAllSeries() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const seriesData = await prisma.serie.findMany();

  return seriesData;
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
