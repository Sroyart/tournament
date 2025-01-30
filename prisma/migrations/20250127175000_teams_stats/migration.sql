/*
  Warnings:

  - Added the required column `draws` to the `Teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `losses` to the `Teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wins` to the `Teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Teams" ADD COLUMN     "draws" INTEGER NOT NULL,
ADD COLUMN     "losses" INTEGER NOT NULL,
ADD COLUMN     "wins" INTEGER NOT NULL;
