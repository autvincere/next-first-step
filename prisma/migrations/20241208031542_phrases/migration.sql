/*
  Warnings:

  - You are about to drop the `PhraseSchema` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PhraseSchema";

-- CreateTable
CREATE TABLE "Phrases" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Phrases_pkey" PRIMARY KEY ("id")
);
