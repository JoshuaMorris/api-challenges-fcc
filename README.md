Timestamp Microservice
======================
## User Stories: 
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example usage:
```
http://timestamp-ms-jm.herokuapp.com/September%2022,%202016
http://timestamp-ms-jm.herokuapp.com/1474502400
```
## Example output:

```
{"unix":"1474502400","natural":"September 22, 2016"}
```