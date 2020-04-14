# 10-10-01-10-10.church


Website of 10-10-01-10-10.church. Streaming Churchy.

[![churchy-screenshot.png](https://i.postimg.cc/GtBpnchW/churchy-screenshot.png)](https://postimg.cc/30ThgQG1)

This project uses the great MERN (+ Redux) user authentication boilerplate with Passport.js and JWT by Rishi Prasad: https://github.com/rishipr/mern-auth

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components
- [Icecast2](http://icecast.org/) free server software for streaming multimedia
- [butt](https://danielnoethen.de/butt/) an easy to use, multi OS streaming tool.

This repo doesn't cover configs for Icecast2 and butt.

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```
