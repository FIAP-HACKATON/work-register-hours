/*
  Warnings:

  - You are about to drop the column `cpf` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `profile` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[matricula]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `matricula` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentId` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UQ_8e1f623798118e629b46a9e6299";

-- DropIndex
DROP INDEX "UQ_a6235b5ef0939d8deaad755fc87";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "cpf",
DROP COLUMN "phone",
DROP COLUMN "profile",
ADD COLUMN     "matricula" VARCHAR(30) NOT NULL,
ADD COLUMN     "parentId" INTEGER NOT NULL,
ADD COLUMN     "password" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "work_hours" ALTER COLUMN "approved" SET DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "UQ_8e1f623798118e629b46a9e6299" ON "user"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_a6235b5ef0939d8deaad755fc87" ON "user"("password");
