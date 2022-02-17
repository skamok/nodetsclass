import express, { Application } from 'express';
import Server from './Server/Server';
import Core from './Core/Core';
import Dispatcher from './Dispatcher/Dispatcher';
import * as coreTypes from './Core/CoreInterfaces';
import { channel } from 'diagnostics_channel';

const PORT = 3000;

const core = new Core();
Core.readSettings();

const dispatcher = new Dispatcher();
Dispatcher.initChannels();
Dispatcher.channels.get('tlgtkn')?.send();

const server = new Server(PORT);
server.initRoutes(Dispatcher.getRoutes());
server.run();

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
