var log = [];
var iterables = new Proxy({}, allowProxyTraps({
  ownKeys(target) {
    log.push("own-keys");
    return Reflect.ownKeys(target);
  }
}));
var options = {
  get mode() {
    log.push("get mode");
    return "longest";
  },
  get padding() {
    log.push("get padding");
    return [];
  }
};
Iterator.zipKeyed(iterables, options);
for (var mode of [undefined, "shortest", "strict"]) {
  log.length = 0;
  options = {
    get mode() {
      log.push("get mode");
      return mode;
    },
    get padding() {
      log.push("unexpected get padding");
      return [];
    }
  };
  Iterator.zipKeyed(iterables, options);
}