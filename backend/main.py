import datetime
from unicodedata import name
from fastapi import Depends, FastAPI, HTTPException
from numpy import place
from sqlalchemy.orm import Session
from database import get_db
from models import ItineraryModel
from fastapi.responses import FileResponse
import qrcode

# from schemas import reservation, check_in, user, username

app = FastAPI()


@app.post("/postItinerary/{dayN}/{email_user}")
async def post_itinerary(dayN: int, email_user: str, places: str, db: Session = Depends(get_db)):
    """
    This function will take the day number and the location and will add it to the database.
    """
    last_id = db.query(ItineraryModel.id_itinerary).order_by(ItineraryModel.id_itinerary.desc()).first()
    last_id_now:int
    if last_id is None:
        last_id_now = 0
    else:
        last_id_now = last_id[0]+1

    new_itinerary = ItineraryModel(
        id_itinerary=last_id_now, email_user=email_user, day_n = dayN, places=places
    )
    db.add(new_itinerary)
    db.commit()
    db.refresh(new_itinerary)
    return new_itinerary
    


@app.get("/getItinerary/{email_user}/{dayN}")
async def get_itinerary(email_user: str, dayN: int, db: Session = Depends(get_db)):
    """
    This function will take the day number and the location and will add it to the database.
    """
    itinerary = db.query(ItineraryModel).filter(ItineraryModel.email_user == email_user, ItineraryModel.day_n == dayN).all()
    return itinerary


@app.get("/getDayUser/{email_user}")
async def get_total_day_user(email_user: str, db: Session = Depends(get_db)):
    """
    This function will take the day number and the location and will add it to the database.
    """
    itinerary = db.query(ItineraryModel).filter(ItineraryModel.email_user == email_user).distinct(ItineraryModel.day_n).count()
    return itinerary


    
