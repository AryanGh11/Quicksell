-- CreateTable
CREATE TABLE "HomepageImages" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "HomepageImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HomepageImages_url_key" ON "HomepageImages"("url");
