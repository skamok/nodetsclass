import ChannelBase from '../ChannelBase';
import * as coreTypes from '../../Core/CoreInterfaces';
import { Router, Request, Response, NextFunction } from 'express';
import Dispatcher from '../../Dispatcher/Dispatcher';

export default class Viber extends ChannelBase {
  constructor(type: number, id: string) {
    super(type, id);
  }

  send() {
    console.log('send to Viber');
  }

  receive(
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Promise<void> {
    let conversation: coreTypes.IConversation;
    const message: coreTypes.IMessage = {
      id: Viber.generateID(),
      status: false,
      text: '',
    };
    if (!req.body.text) {
      return;
    } else {
      message.text = req.body.text;
    }
    if (Viber.conversations.get(this.id)) {
      conversation = Viber.conversations.get(this.id)!;
      conversation.messages.push(message);
      console.log('add', req.body.text);
    } else {
      conversation = {
        id: Viber.generateID(),
        channelId: this.id,
        messages: [message],
      };
      Viber.conversations.set(this.id, conversation);
    }
    const translatedText = Dispatcher.translate(message.text, 'EN');
    res.send(translatedText);
  }
}
