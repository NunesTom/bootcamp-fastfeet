const express = require('express'); // yarn add expres
const routes = require('./routes');

/* Class do app */ 
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() { // utilizado na interceptação de requisições
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
