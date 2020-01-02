This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Authentication

## How to use this repo:

1. Fork and clone
2. Create an `.env` file which includes these things:

```
SERVER_PORT = 4040
SESSION_SECRET = SOMETHINGSECRET
CONNECTION_STRING = <Your PostgreSQL URI>
```

## Encoding, Encryption, and Hashing

* **Encoding** is simply transforming data into a format for sending it across the internet. You can't mail just anything, it needs to by placed in an envelope with a stamp and an address.
* **Encryption** transforms data with the goal of keeping it secret. Both the sender and the recipient have matching keys to unlock the data.
* **Hashing** transforms the data into an unrecognizable state. Like baking bread, it is a process that cannot be undone. The goal here is to preserve the integrity of the data. This is what we will do with passwords.

## Bcrypt.js

We will utilize the package `bcryptjs` from npm to handle our need for a hashing algorithm. 

1. `npm i bcryptjs`.
2. `const bcrypt = require('bcryptjs')`.
3. Generate a salt with bcrypt to add to our password before hashing it. The method we will use is `bcrypt.genSaltSync(10)`.
    * The number 10 is instruction to run the hashing algorithm 10 times.
4. Add the salt and the password to our hashing algorithm like this: `bcrypt.hashSync(password, salt)`.
    * This will create the final hash of our password.
5. When the time comes to login and compare the user's password with the hash we have stored, use the method `bcrypt.compareSync(password, hash)`.
    * _compareSync_ will return true if the password re-hashes the same way as our saved hash, and false if they don't match after hashing.

# Important

We are not security experts. This is why we utilize other peoples' packages and code in this process.

Some very popular login authentication packages include: 
1. [Passport](http://www.passportjs.org/)
2. [Auth0](https://auth0.com/)