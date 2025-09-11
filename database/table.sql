DROP DATABASE IF EXISTS portfolio_db;

CREATE DATABASE portfolio_db;

DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    client VARCHAR(255) NULL,
    project_url VARCHAR(255) NULL,
    slug VARCHAR(255) NOT NULL,
    image VARCHAR(255) NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);