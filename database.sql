
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
    "faves" VARCHAR (250)
);

CREATE TABLE "playground" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "address" VARCHAR (80) NOT NULL,
    "img_url" VARCHAR (350),
    "description" VARCHAR (250),
    "kiddie_friendly" BOOLEAN default FALSE
);


CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "user_faves" INT,
    "pg_id" INT
);

INSERT INTO "playground" ("name", "address", "img_url", "description", "kiddie_friendly")
VALUES ('Casey Lake Park', '2101 17th Ave E, North Saint Paul 55109', 
'https://www.google.com/maps/uv?hl=en&pb=!1s0x52b2d3eec326ab19%3A0xb5102d5898e4e913!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNafh6sog1g3UsoNe9pA17lo5inUmMA9YQC3AzX%3Dw260-h175-n-k-no!5splayground%2055109%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNafh6sog1g3UsoNe9pA17lo5inUmMA9YQC3AzX#',
'Sprawling, modern, well-maintained park in North Saint Paul. Public restrooms, walking path, fishing pond, custom swings, nearby baseball fields. Frequent ice cream truck visits', TRUE);