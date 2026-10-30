#!/usr/bin/env python3
import json
import os
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

api_key = os.environ.get("GOOGLE_PLACES_API_KEY")
if not api_key:
    raise SystemExit("GOOGLE_PLACES_API_KEY is not configured")

payload = json.dumps({
    "textQuery": "Bella Ciao, Av. d'Enclar 84, Santa Coloma, Andorra",
    "languageCode": "ca"
}).encode("utf-8")

request = urllib.request.Request(
    "https://places.googleapis.com/v1/places:searchText",
    data=payload,
    method="POST",
    headers={
        "Content-Type": "application/json",
        "X-Goog-Api-Key": api_key,
        "X-Goog-FieldMask": "places.id,places.displayName,places.rating,places.userRatingCount"
    }
)

with urllib.request.urlopen(request, timeout=20) as response:
    result = json.loads(response.read().decode("utf-8"))

places = result.get("places") or []
if not places:
    raise SystemExit("Bella Ciao was not found in Google Places")

place = places[0]
rating = place.get("rating")
review_count = place.get("userRatingCount")
if not isinstance(rating, (int, float)) or not isinstance(review_count, int):
    raise SystemExit("Google Places returned incomplete rating data")

data = {
    "rating": rating,
    "reviewCount": review_count,
    "placeId": place.get("id"),
    "updatedAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")
}
Path("google-rating.json").write_text(
    json.dumps(data, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8"
)
