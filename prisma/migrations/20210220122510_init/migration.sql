-- CreateTable
CREATE TABLE "vote" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vote_variant" (
    "id" TEXT NOT NULL,
    "vote_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "vote_number" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vote_variant" ADD FOREIGN KEY ("vote_id") REFERENCES "vote"("id") ON DELETE CASCADE ON UPDATE CASCADE;
