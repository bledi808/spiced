-- terminal: create actors database: createdb actors-exercise


-- terminal: run actors.sql file to create the table below in the actors-exercise database: psql -d actors-exercise -f actors.sql
DROP TABLE IF EXISTS actors;

CREATE TABLE actors  (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    age INT,
    oscars INT
);

-- terminal: access database and and table: psql actors-exercise and \dt 
-- terminal: run actors.sql file to insert the below rows into actors table: psql -d actors-exercise -f actors.sql

INSERT INTO actors (name, age, oscars) VALUES ('Leonardo DiCaprio', '41', 1);
INSERT INTO actors (name, age, oscars) VALUES ('Jennifer Lawrence	', '25', 1);
INSERT INTO actors (name, age, oscars) VALUES ('Samuel L. Jackson', '67', 0);
INSERT INTO actors (name, age, oscars) VALUES ('Meryl Streep', '66', 3);
INSERT INTO actors (name, age, oscars) VALUES ('John Cho', '43', 0);

-- terminal: access database and and table: psql actors-exercise and \dt and SELECT * FROM actors; (returns all rows)
-- terminal: SELECT actors FROM actors WHERE oscars > 1; 
----------returns (4,"Meryl Streep",66,3)

-- terminal: SELECT actors FROM actors WHERE age > 30; returs:
----------  (1,"Leonardo DiCaprio",41,1)
----------  (3,"Samuel L. Jackson",67,0)
----------  (4,"Meryl Streep",66,3)
----------  (5,"John Cho",43,0)