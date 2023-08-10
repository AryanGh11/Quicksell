/*
  Warnings:

  - You are about to drop the `HomepageImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "HomepageImages";

-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Images_url_key" ON "Images"("url");
