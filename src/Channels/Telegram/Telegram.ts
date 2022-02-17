import Dispatcher from '../../Dispatcher/Dispatcher';
import ChannelBase from '../ChannelBase';
import { Router, Request, Response, NextFunction } from 'express';

export default class Telegram extends ChannelBase {
  constructor(type: number, id: string) {
    super(type, id);
  }

  send() {
    super.send();
    console.log('send to Telegram');
    // also send  to Viber
    Dispatcher.channels.get('vbtkn')?.send();
  }

  receive(
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Promise<void> {
    console.log(req.body);
    res.send('get message from Telegram');
  }
}
