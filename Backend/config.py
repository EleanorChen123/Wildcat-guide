# config.py

import os

DB_USER = 'postgres'
DB_PASSWORD = '6427'
DB_HOST = 'localhost'
DB_PORT = '5432'
DB_NAME = 'wildcat_guide'

SQLALCHEMY_DATABASE_URI = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
SQLALCHEMY_TRACK_MODIFICATIONS = False
