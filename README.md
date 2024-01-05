# eventEmitterjs
custom event emmiter
<br />
// main.js <br />
const EventEmitter = require('./eventEmitter');<br />
<br />
const myEmitter = new EventEmitter();<br />
<br />
// Pretplati se na događaj<br />
myEmitter.on('customEvent', data => {<br />
  console.log(`Događaj emitovan sa podacima: ${data}`);<br />
});
<br />
// Emituj događaj sa podacima<br />
myEmitter.emit('customEvent', 'Zdravo, ovo su neki podaci!');<br />
 or<br />
 in browser<br />

 import EventEmitter from './eventEmitter';<br />
<br />
const myEmitter = new EventEmitter();<br />
<br />
// Subscribe to an event<br />
myEmitter.on('customEvent', data => {<br />
  console.log(`Event emitted with data: ${data}`);<br />
});<br />
<br />
// Emit an event with data<br />
myEmitter.emit('customEvent', 'Hello, this is some data!');<br />
