/*
  Warnings:

  - Added the required column `movieId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Comment` ADD COLUMN `movieId` VARCHAR(191) NOT NULL;
