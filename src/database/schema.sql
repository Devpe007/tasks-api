CREATE DATABASE tasksapi;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_V4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  phone VARCHAR,
  password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_V4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_V4(),
  name VARCHAR NOT NULL,
  image VARCHAR,
  description VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
