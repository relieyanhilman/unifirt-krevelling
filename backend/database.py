from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# USER = "postgres"
# PASSWORD = "070500"
# HOST = "localhost"
# DATABASE = "reksismul"


DATABASE_URL = 'postgresql://postgres:070500@localhost:5432/ppam_database'

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    except:
        db.close()