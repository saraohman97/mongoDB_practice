"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prismadb";

export async function create(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title.trim()) return;

  await prisma.todo.create({
    data: {
      title: title,
    },
  });

  revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  const updatedStatus = !todo?.isCompleted;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });

  revalidatePath("/");
  return updatedStatus;
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;

  const inputId = formData.get("inputId") as string;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}
