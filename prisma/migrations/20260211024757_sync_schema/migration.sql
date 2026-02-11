-- CreateTable
CREATE TABLE "DesignJob" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CREATED',
    "progress" INTEGER NOT NULL DEFAULT 0,
    "inputKey" TEXT,
    "styleBrief" JSONB,
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesignJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignOutput" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "variant" INTEGER NOT NULL,
    "outputKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DesignOutput_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DesignOutput_jobId_variant_key" ON "DesignOutput"("jobId", "variant");

-- AddForeignKey
ALTER TABLE "DesignOutput" ADD CONSTRAINT "DesignOutput_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "DesignJob"("id") ON DELETE CASCADE ON UPDATE CASCADE;
