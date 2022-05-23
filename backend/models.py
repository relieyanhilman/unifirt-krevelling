# from psycopg2 import Date, Time
from unicodedata import name
from sqlalchemy import VARCHAR, Column, DateTime, Integer
# from sqlalchemy.sql.sqltypes import VARCHAR, Text
# from sqlalchemy.orm import relationship

from database import Base

class ItineraryModel(Base):
    __tablename__ = "itinerary_list"

    id_itinerary = Column(Integer, primary_key=True, index=True, nullable=False)
    email_user = Column(VARCHAR(255), nullable=False)
    day_n = Column(Integer)
    places = Column(VARCHAR(100))
    



