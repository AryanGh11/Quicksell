/*
  Warnings:

  - You are about to drop the column `isTag` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "isTag",
ADD COLUMN     "tag" TEXT;
