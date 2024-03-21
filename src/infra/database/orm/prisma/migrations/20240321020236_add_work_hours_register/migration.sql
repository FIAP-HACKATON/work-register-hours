-- CreateTable
CREATE TABLE "work_hours" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "justificative" VARCHAR(100),
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "PK_cace4a159ff9f2512dd42373761" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "work_hours" ADD CONSTRAINT "work_hours_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
