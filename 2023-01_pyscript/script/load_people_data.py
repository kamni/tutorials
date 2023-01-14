"""
Script to load data into the sqlite database.

This should have already been run and the results stored in
`static/data/people.sql`. There should be no need to run this script.
"""

import sqlite3
from dataclasses import dataclass


TABLE = """
CREATE TABLE IF NOT EXISTS people (
    name CHAR(100) NOT NULL,
    age INTEGER,
    city CHAR(255),
    state CHAR(3),
    UNIQUE(name, age)
);
"""


@dataclass
class Person:
    name: str
    age: int
    city: str
    state: str

    def to_sql(self):
        return f"'{self.name}', {self.age}, '{self.city}', '{self.state}'"


DATA = (
    Person('Santo Dawson', 53, 'Virginia Beach', 'VA'),
    Person('Marcy Manning', 48, 'Kansas City', 'MO'),
    Person('Vera Jensen', 24, 'Mesa', 'AZ'),
    Person('Michael George', 19, 'Lexington-Fayette', 'KY'),
)

with sqlite3.connect('people.sql') as conn:
    cursor = conn.cursor()
    cursor.execute(TABLE)
    conn.commit()

    for person in DATA:
        cursor.execute((
            "INSERT OR IGNORE INTO people(name, age, city, state) "
            f"VALUES({person.to_sql()});"
        ))
        conn.commit()
