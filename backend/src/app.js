// yarn add express
import express from 'express';

// const routes = require('./routes'); alterado com o sucrase para utilizar sintaxe de import
import routes from './routes';

// Importar o database para inicializar com a API
import './database';

/* Class do app */
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // utilizado na interceptação de requisições
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
