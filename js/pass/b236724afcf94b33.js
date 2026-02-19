var log = [];
var iterables = {
  get a() {
    log.push("get a");
    delete iterables.b;
    return [];
  },
  get b() {},
  get c() {
    log.push("get c");
    iterables.d = null;
    return [];
  }
};
Iterator.zipKeyed(iterables);