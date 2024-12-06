import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({
    data: [
      { description: "piedra de alma", complete: false },
      { description: "piedra de alma", complete: true },
      { description: "piedra de alma", complete: false },
      { description: "piedra de alma", complete: true },
      { description: "piedra de alma", complete: false },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
