# eventEmitterjs
custom event emmiter
// main.js
const EventEmitter = require('./eventEmitter');

const myEmitter = new EventEmitter();

// Pretplati se na događaj
myEmitter.on('customEvent', data => {
  console.log(`Događaj emitovan sa podacima: ${data}`);
});

// Emituj događaj sa podacima
myEmitter.emit('customEvent', 'Zdravo, ovo su neki podaci!');
 or
 in browser

 import EventEmitter from './eventEmitter';

const myEmitter = new EventEmitter();

// Subscribe to an event
myEmitter.on('customEvent', data => {
  console.log(`Event emitted with data: ${data}`);
});

// Emit an event with data
myEmitter.emit('customEvent', 'Hello, this is some data!');
