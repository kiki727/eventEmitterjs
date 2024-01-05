// eventEmitter.js
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, data) {
    const eventListeners = this.events[eventName];
    if (eventListeners) {
      eventListeners.forEach(listener => listener(data));
    }
  }
}

let eventEmitter;

// Proveri da li se izvršava u Node.js ili u pregledaču
if (typeof module !== 'undefined' && module.exports) {
  // Node.js
  eventEmitter = new EventEmitter();
  module.exports = eventEmitter;
} else {
  // Browser
  eventEmitter = new EventEmitter();
  window.EventEmitter = eventEmitter;
}
