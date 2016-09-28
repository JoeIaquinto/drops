# Drops API v.001
---
Here I'm brainstorming some basic API calls to the Drops Node.JS Express Mongo backend 

| HTML Code | Endpoint | Result |
|-----------|----------|--------|
| GET       | /api/Drops | Returns all visible drops |
| POST      | /api/Drops | Create new Drop, add to relevant feed, add to creator's Drops |
| GET       | /api/Drops/Nearby:Radius | Return all visible drops within a radius with geolocations |
| GET       | /api/Drops/:DropID | Get all information about a Drop with an ID key |
| PUT       | /api/Drops/:DropID | Update the current user's info in the Drop, Updates feed |
| DELETE    | /api/Drops/:DropID | Allow Creator to delete a Drop |
| POST      | /api/Users??? | Add a new user after Facebook logs in, Reprompt after token expires, use Exponent FB login |
| GET       | /api/Users/Friends | Returns all friends |
| GET       | /api/Users/?Name | Return search results for query of names of visible users |
| GET       | /api/Users/:UserID | Return User's profile information |
| GET       | /api/Drops/Feed | Returns aggregated visible feed items from all visible Drops |
| GET       | /api/Drops/Feed/:DropID | Returns aggregated visible feed items from a Drop |
