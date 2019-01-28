# Overview

Playground for authentication, cookie, token, nodejs, express, mongoose, api and content server.

## Installation

First, clone this repo and change to the directory:

```bash
git clone git@github.com:pmtargosz/<project>.git
cd <project>
```

### Install

```bash
cd <project>
npm install
```

### Config

Creat `config.js` file inside project root folder and add this code changing `<your_data>`:

```js
const config = {
  ENV: process.env.NODE_ENV || "<your_data>",
  PORT: process.env.PORT || "<your_data>",
  URL: process.env.BASE_URL || `http://localhost:${this.PORT}`,
  MONGODB_URI: process.env.MONGODB_URI || "<your_data>"
};

module.exports = config;
```

### Run

```bash
cd <project>
npm start
# http://localhost:3000
```

## Resources

- [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [nodemon](https://github.com/remy/nodemon) - Tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js.
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
- [MongoDB](https://www.mongodb.com/) - MongoDB is a cross-platform document-oriented database program.
- [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js.
- [mongoose-timestamp](https://www.npmjs.com/package/mongoose-timestamp) - Simple plugin for Mongoose which adds createdAt and updatedAt date attributes that get auto-assigned to the most recent create/update timestamp.
- [mLab](https://mlab.com) - mLab is a fully managed cloud database service that hosts MongoDB databases. mLab runs on cloud providers Amazon, Google, and Microsoft Azure, and has partnered with platform-as-a-service providers.

## License

[MIT](https://opensource.org/licenses/MIT)
