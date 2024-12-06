import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const phrases = await prisma.phraseSchema.findMany();
  // Select a random phrase
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  return NextResponse.json({ randomPhrase });
}
