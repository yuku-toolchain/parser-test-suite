let log = [];
let s = Symbol("test");
let target = {
  x: true
};
let ownKeys = {
  get length() {
    log.push({
      name: "get ownKeys['length']",
      receiver: this
    });
    return 3;
  },
  get 0() {
    log.push({
      name: "get ownKeys[0]",
      receiver: this
    });
    return "a";
  },
  get 1() {
    log.push({
      name: "get ownKeys[1]",
      receiver: this
    });
    return s;
  },
  get 2() {
    log.push({
      name: "get ownKeys[2]",
      receiver: this
    });
    return "b";
  }
};
let ownKeysDescriptors = {
  "a": {
    enumerable: true,
    configurable: true,
    value: 1
  },
  "b": {
    enumerable: false,
    configurable: true,
    value: 2
  },
  [s]: {
    enumerable: true,
    configurable: true,
    value: 3
  }
};
let handler = {
  get ownKeys() {
    log.push({
      name: "get handler.ownKeys",
      receiver: this
    });
    return (...args) => {
      log.push({
        name: "call handler.ownKeys",
        receiver: this,
        args
      });
      return ownKeys;
    };
  },
  get getOwnPropertyDescriptor() {
    log.push({
      name: "get handler.getOwnPropertyDescriptor",
      receiver: this
    });
    return (...args) => {
      log.push({
        name: "call handler.getOwnPropertyDescriptor",
        receiver: this,
        args
      });
      const name = args[1];
      return ownKeysDescriptors[name];
    };
  }
};
let proxy = new Proxy(target, handler);
let keys = Object.keys(proxy);