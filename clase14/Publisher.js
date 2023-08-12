class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  publish(data) {
    this.subscribers.forEach(fn => fn(data))
  }
  // Se podria agrega un metodo de unsubscribe
}

export default Publisher;