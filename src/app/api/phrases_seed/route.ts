import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import phrases from "./phrases.json";

export async function GET(request: Request) {
  await prisma.phrases.deleteMany();
  // import data json with prisma
  await prisma.phrases.createMany({ data: phrases });

  return NextResponse.json(phrases);
}
