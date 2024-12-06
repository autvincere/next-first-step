import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import phrases from "./phrases.json";

export async function GET(request: Request) {
  await prisma.phraseSchema.deleteMany();
  // import data json with prisma
  await prisma.phraseSchema.createMany({ data: phrases });

  return NextResponse.json(phrases);
}
