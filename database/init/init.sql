CREATE DATABASE zone;

CREATE TABLE registerzone(
    StdID VARCHAR PRIMARY KEY,
    FullName VARCHAR(255),
    Sport_acquired VARCHAR(50),
    Date DATE,
    Time TIME, 
    Office_Tower VARCHAR(255),
    Floor INT
);