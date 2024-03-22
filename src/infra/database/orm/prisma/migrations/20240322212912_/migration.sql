/*
  Warnings:

  - You are about to drop the column `matricula` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registration]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registration` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UQ_8e1f623798118e629b46a9e6299";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "matricula",
ADD COLUMN     "registration" VARCHAR(30) NOT NULL,
ALTER COLUMN "parentId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UQ_8e1f623798118e629b46a9e6299" ON "user"("registration");
