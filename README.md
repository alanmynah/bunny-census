# bunny-census

CRUD API for Bunny Census

Endpoints:

```text
https://bunny-census.herokuapp.com/ - "GET  root" - use as test
/census
    - GET - All entries
    - POST - Create entry
    POST structure:
    name: string, required
    colour: string, required
    size: string, required

/census/:entryId
    - GET - All entries
    - POST - Create entry
    - PUT - Update entry
    - DELETE - Delete entry
```
