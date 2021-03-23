CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    email TEXT NOT NULL, 
    password VARCHAR(255) NOT NULL  
);