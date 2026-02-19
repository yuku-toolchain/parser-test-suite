const logs = [];
Object.defineProperty(Object.prototype, '2', {
  get() {
    logs.push('get');
    return 4;
  },
  set(v) {
    logs.push(`set with ${v}`);
  }
});
const array = [undefined, 3, 2, undefined, 1];
array.sort();