
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (80) NOT NULL,
    "zip_code" INT,
    "child_age" INT,
    "faves" INT
);

CREATE TABLE "playground" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "address" VARCHAR (80) NOT NULL,
    "img_url" VARCHAR (250),
    "description" VARCHAR (250)
);

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "user_faves" INT,
    "pg_id" INT
);