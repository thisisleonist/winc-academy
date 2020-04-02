# Rating met POST en DELETE
ID = 603
Movie: The Matrix, 1999

`GET https://api.themoviedb.org/3//authentication/guest_session/new?api_key=79c1f23d5822955801447c6490744b56`

```
{
    "success": true,
    "guest_session_id": "84fe4dd4af0574157c858443df442f67",
    "expires_at": "2020-04-03 05:16:25 UTC"
}
```


`POST https://api.themoviedb.org/3/movie/603/rating?api_key=79c1f23d5822955801447c6490744b56&guest_session_id=84fe4dd4af0574157c858443df442f67`

```
{
	"value": "10"
}
```

```
{
    "status_code": 1,
    "status_message": "Success."
}
```

`DELETE https://api.themoviedb.org/3/movie/603/rating?api_key=79c1f23d5822955801447c6490744b56&guest_session_id=84fe4dd4af0574157c858443df442f67`

```
{
    "status_code": 13,
    "status_message": "The item/record was deleted successfully."
}
```

#Winc