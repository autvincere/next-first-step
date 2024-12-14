import prisma from "@/app/lib/prisma";
import next from "next";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  }
}
export async function GET(request: Request) {
  const todos = await prisma.phrases.findMany();
  return NextResponse.json({ todos });
}

const phraseSchema = yup.object({
  text: yup.string().required(),
  author: yup.string().required(),
  // complete: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const { text, author } = await phraseSchema.validate(await request.json());
    const newPhrases = await prisma.phrases.create({ data: { text, author } });
    console.log(newPhrases);

    return NextResponse.json({ message: "Phrase created", item: newPhrases });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

// delete
export async function DELETE(request: Request) {
  try {
    // obtain "id" from "body" request
    // const body = await request.json();
    // console.log("body: ", body);
    const { id } = await request.json();

    // const id = searchParams.get("id");
    if (id === null) {
      return NextResponse.json({ error: "id is required" }, { status: 400 });
    }
    const deletedPhrase = await prisma.phrases.delete({ where: { id } });
    return NextResponse.json({ message: "Phrase deleted", item: deletedPhrase });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const url = req.nextUrl;
    const query = new URLSearchParams(url.search);
    const id = query.get('id') ?? undefined;
    console.log("id: ", id);
    const idExist = await prisma.phrases.findUnique({ where: { id } });
    if (!idExist) {
      return NextResponse.json({ error: `Phrase with id:${id} not found` }, { status: 404 });
    }

    const { text, author } = await phraseSchema.validate(await req.json());
    const updatedphrases = await prisma.phrases.update({
      where: { id },
      data: { text, author },
    });
    return NextResponse.json({ message: "Phrase updated", item: updatedphrases });
  } catch (error: unknown ) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
  }
}
