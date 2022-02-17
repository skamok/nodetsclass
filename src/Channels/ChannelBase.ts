import Core from '../Core/Core';
// import Dispatcher from '../Dispatcher/Dispatcher';
import { Router, Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

export default class ChannelBase extends Core {
  type: number;
  id: string;
  router: Router;

  constructor(type: number, id: string) {
    super();
    this.type = type;
    this.id = id;
    this.router = Router();
    this.initRouter();
  }
  send() {}
  receive(
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Promise<void> {}

  initRouter() {
    const path = Core.settings.channels.find(
      (channel) => channel.id === this.id
    )!.route;
    this.router.get(path, this.receive.bind(this));
  }

  static generateID() {
    return uuidv4();
  }
}
