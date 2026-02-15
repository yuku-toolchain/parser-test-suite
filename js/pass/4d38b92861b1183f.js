var log = [];
Object.keys(new Proxy([], new Proxy({}, {
  get(t, pk, r) {
    log.push(pk);
  }
})));