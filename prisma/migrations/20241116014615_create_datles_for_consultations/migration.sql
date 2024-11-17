-- CreateTable
CREATE TABLE "ConsultationTime" (
    "time" TEXT NOT NULL,

    CONSTRAINT "ConsultationTime_pkey" PRIMARY KEY ("time")
);

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "responsibleName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "namePet" TEXT NOT NULL,
    "speciePet" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "time" TEXT NOT NULL,
    "service" TEXT NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_time_fkey" FOREIGN KEY ("time") REFERENCES "ConsultationTime"("time") ON DELETE RESTRICT ON UPDATE CASCADE;
