CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "username" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "blocked" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "PageMeta" (
  "id" SERIAL PRIMARY KEY,
  "route" TEXT UNIQUE NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "keywords" TEXT NOT NULL
);
