import express  from 'express'; // yarn add expres
// const routes = require('./routes'); alterado com o sucrase para utilizar sintaxe de import
import routes from './routes';

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

export default new App().server;
