import express, { Application, Request, Response, Router } from 'express';
import { runMain } from 'module';
import { urlToHttpOptions } from 'url';

export default class Server {
  app: Application;
  port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(express.json());
    this.app.get('/test', (req: Request, res: Response) => {
      res.send('Hello World!');
    });
  }

  initRoutes(routes: Router[]) {
    routes.forEach((router) => {
      this.addRoute(router);
    });
  }

  addRoute(router: Router) {
    this.app.use('/', router);
  }

  run() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}
