-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
