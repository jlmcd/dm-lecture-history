# Massive

## What is Massive?

Massive is a tool for communication between the database and the server. Just like _axios_ sits in between the client and the server, **massive** sits in between the server and the database.

## Setup

In the `server.js` file, massive is set up like this:
```javascript
...

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
})
```

Once we **set** the database connection to the `'db'` string in express, we can use the connection in a controller file like this:
```javascript
endpointHandler(req, res) {
  const db = req.app.get('db')
}
```

In the file structure, massive is set up with the following:
1. A `db` folder in the root of the project.
2. A `seed.sql` file in the _db_ folder which contains the schema of the project.
