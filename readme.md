## Authentication api for testing

## APIS

#### POST /auth/login

```

=> payload
{
    "email": "example@example.com",
    "password": "pa$$word"
}

=> Response: 200 OK
{
    "token": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0OGYxMmU3NS02NGM0LTRlZTItODU0NC0xZTk3YzQ4YWE0YTAiLCJuYW1lIjoiUmljayBCZWNodGVsYXIgViIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsImpvaW5lZCI6IjIwMjEtMDctMTZUMTk6MjI6MDguMzI4WiIsImF2YXRhciI6Imh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzL1FtZDNXNUR1aGdIaXJMSEdWaXhpNlY3NkxoQ2taVXo2cG5GdDVBSkJpeXZIeWUvYXZhdGFyLzEwNDAuanBnIiwiaWF0IjoxNjQ5MDMyMTIzLCJleHAiOjE2NDkwMzIxODN9.Cuzt53iwC76mhBJ-k2e6HZmCKV_VMAP5LiNg2Vhzmb8",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0OGYxMmU3NS02NGM0LTRlZTItODU0NC0xZTk3YzQ4YWE0YTAiLCJuYW1lIjoiUmljayBCZWNodGVsYXIgViIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsImpvaW5lZCI6IjIwMjEtMDctMTZUMTk6MjI6MDguMzI4WiIsImF2YXRhciI6Imh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzL1FtZDNXNUR1aGdIaXJMSEdWaXhpNlY3NkxoQ2taVXo2cG5GdDVBSkJpeXZIeWUvYXZhdGFyLzEwNDAuanBnIiwiaWF0IjoxNjQ5MDMyMTIzLCJleHAiOjE2NDk2MzY5MjN9.cP3iUrj8MAw3RlObG9y25KpI2D8fQUkTTi8DzX8_RlU"
    }
}

=> Response: 401 Unauthorized
{
    "message": "Invalid credentials"
}
```

#### POST /auth/refresh

```bash
// TODO:
```

#### POST /auth/me

```bash
// TODO:
```

#### POST /protected-route

```bash
// TODO:
```
